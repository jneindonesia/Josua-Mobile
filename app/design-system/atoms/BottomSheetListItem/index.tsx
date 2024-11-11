import React, { useState } from 'react';
import { BaseBottomSheetList, BaseBottomSheetListProps } from '../BaseBottomSheet';
import { IOption, IMapOption } from '../../base/types';
import { BaseButton } from '../Button';
import { SeparatorLine } from '../Separator';
import { Text } from '../Text';
import { VerticalView } from '../LayoutView';
import { Loading } from '../Loading';
import { NegativeCaseServerDown, NegativeCaseNotFound, NegativeCaseSearchNotFound } from '../NegativeCase';
import { NotFoundError } from 'app/data/exceptions';
import { isUndefined } from '../../utils';

export interface IOptionsConfig {
  loading: boolean;
  error: Error | null | unknown;
  onRetry: () => void;
  useAsyncOptions?: boolean; // saat true berarti akan hit api
  autoSearchable?: boolean;
  behaviourHandleSearchNotFound?: 'add' | 'default';
}

export interface BottomSheetListItemProps<ItemT>
  extends Omit<BaseBottomSheetListProps<ItemT>, 'data' | 'flatListProps'> {
  onDismiss?: () => void;
  options: ItemT[];
  onChangeValue: (value: ItemT, mappedValue?: IOption, index?: number) => void;
  mapOption?: IMapOption;
  optionsConfig?: Partial<IOptionsConfig>;
  refreshing?: boolean;
  onRefresh?: () => void;
}

const ListItemView: React.FC<{ label?: string; onPress: () => void }> = ({ label, onPress }) => {
  return (
    <BaseButton onPress={ onPress }>
      <Text variant={ 'body2' } color='textMidnight' paddingVertical={ 'm' }>
        { label }
      </Text>
    </BaseButton>
  );
};

const EmptyView: React.FC<{
  useAsyncOptions?: boolean;
  loading?: boolean;
  error?: Error | null | unknown;
  isSearching?: boolean;
  onRetry?: () => void;
}> = ({ useAsyncOptions, isSearching, loading, error, onRetry }) => {
  if (useAsyncOptions) {
    return <EmptyViewAsync loading={ loading } error={ error } isSearching={ isSearching } onRetry={ onRetry } />;
  }
  return (
    <VerticalView flex={ 1 } alignItems='center' justifyContent={ 'center' } minHeight={ 250 }>
      <Text variant={ 'subtitle2' }>{ 'Data tidak ditemukan' }</Text>
      { isSearching && <Text variant={ 'body3' }>{ 'Cek kembali kata pencarian anda' }</Text> }
    </VerticalView>
  );
};

const EmptyViewAsync: React.FC<{
  loading?: boolean;
  error?: Error | null | unknown;
  isSearching?: boolean;
  onRetry?: () => void;
}> = ({ loading, error, isSearching, onRetry }) => {
  if (loading) {
    return <Loading style={ { height: 250 } } />;
  }
  if (isUndefined(error)) { return null; }
  if (isSearching && error instanceof NotFoundError) {
    return (
      <NegativeCaseSearchNotFound title='Data tidak ditemukan' message={ 'Cek kembali kata pencarian anda' } />
    );
  }
  if (error instanceof NotFoundError) {
    return <NegativeCaseNotFound title='Data tidak ditemukan' message={ error?.message } />;
  }
  return <NegativeCaseServerDown customContainerStyle={ { alignSelf: 'center' } } onRetry={ onRetry } />;
};

function BottomSheetListItemInner<T>(
  props: BottomSheetListItemProps<T>,
  ref: React.ForwardedRef<BaseBottomSheetList>
) {
  const {
    options,
    onChangeValue,
    onDismiss,
    onChange,
    mapOption = {
      label: 'label',
      value: 'value',
    },
    optionsConfig,
    headerOption,
    refreshing,
    onRefresh,
    ..._props
  } = props;

  function mapOptionItem(item: any): IOption {
    return {
      label: item[`${mapOption?.label}`],
      value: item[`${mapOption?.value}`],
      other: item?.other,
    };
  }

  const [searchText, setSearchText] = useState<string>('');

  const data = React.useMemo(() => {
    if (!optionsConfig?.useAsyncOptions || optionsConfig?.autoSearchable) {
      const optionFiltered = options.filter(
        option => mapOptionItem(option)?.label?.toLowerCase?.().indexOf?.(searchText.toLowerCase()) > -1
      );
      if (optionFiltered.length === 0 && optionsConfig?.behaviourHandleSearchNotFound === 'add') {
        optionFiltered.push({
          [`${mapOption?.label}`]: searchText,
          [`${mapOption?.value}`]: searchText,
          other: true,
        } as T);
      }
      return optionFiltered;
    }
    return options;
  }, [options, optionsConfig?.useAsyncOptions, optionsConfig?.autoSearchable, searchText]);

  const isSearching = React.useMemo(() => {
    if (!optionsConfig?.useAsyncOptions || optionsConfig?.autoSearchable) {
      return searchText.length > 0;
    }
    return headerOption?.searchText !== undefined && headerOption?.searchText?.length > 0;
  }, [searchText, optionsConfig?.useAsyncOptions, optionsConfig?.autoSearchable, headerOption?.searchText]);

  const searchTextValue = React.useMemo(() => {
    if (optionsConfig?.useAsyncOptions && !optionsConfig?.autoSearchable) {
      return headerOption?.searchText ?? '';
    }
    return searchText;
  }, [searchText, optionsConfig?.useAsyncOptions, optionsConfig?.autoSearchable, headerOption?.searchText]);

  function onChangeText(text: string) {
    if (optionsConfig?.useAsyncOptions && !optionsConfig?.autoSearchable) {
      headerOption?.onChangeSearchText?.(text);
    } else {
      setSearchText(text);
    }
  }
  return (
    <BaseBottomSheetList
      ref={ ref }
      headerOption={ {
        showDefaultHeader: true,
        showSearch: true,
        searchText: searchTextValue,
        onChangeSearchText: onChangeText,
        ...headerOption,
      } }
      onDismiss={ () => {
        setSearchText('');
      } }
      flatListProps={ {
        data: data,
        renderItem: ({ item, index }) => {
          const option = mapOptionItem?.(item as T);
          const label = option.other ? `Tambahkan "${option.label}"` : option.label;
          return <ListItemView label={ label } onPress={ () => onChangeValue(item as T, option, index) } />;
        },
        ListEmptyComponent: (
          <EmptyView
            useAsyncOptions={ optionsConfig?.useAsyncOptions }
            isSearching={ isSearching }
            error={ optionsConfig?.error }
            loading={ optionsConfig?.loading }
            onRetry={ optionsConfig?.onRetry }
          />
        ),
        keyExtractor: (item, index) => index.toString(),
        ItemSeparatorComponent: () => <SeparatorLine />,
        keyboardShouldPersistTaps: 'handled',
        keyboardDismissMode: 'on-drag',
        refreshing: refreshing,
        onRefresh: onRefresh,
      } }
      onChange={ (index: number) => {
        if (index === -1 && onDismiss !== undefined) {
          onDismiss();
        }
        onChange?.(index);
      } }
      { ..._props }
    />
  );
}

export type BottomSheetListItem = BaseBottomSheetList;

export const BottomSheetListItem = React.forwardRef(BottomSheetListItemInner);
