import React from 'react';
import { Text } from '../Text';
import { TextButton } from '../Button';
import { Search } from '../Search';
import { Spacer } from '../Separator';
import { HorizontalView, VerticalView } from '../LayoutView';

export interface BaseBottomSheetHeaderProps {
  title?: string;
  description?: string;
  topActionText?: string;
  onClickTopAction?: () => void;
  searchPlaceholder?: string;
  searchText?: string;
  onChangeSearchText?: (text: string) => void;
  showSearch?: boolean;
}

const BaseBottomSheetHeader: React.FC<BaseBottomSheetHeaderProps> = ({
  title,
  description,
  topActionText,
  searchText,
  searchPlaceholder,
  showSearch,
  onChangeSearchText,
  onClickTopAction,
}) => {
  return (
    <VerticalView>
      <HorizontalView>
        <VerticalView flex={ 1 }>
          <Text variant={ 'subtitle' } flexShrink={ 1 }>
            { title }
          </Text>
          <Text variant={ 'body3' }>{ description }</Text>
        </VerticalView>

        { !!topActionText && <TextButton title={ topActionText } onPress={ onClickTopAction } /> }
      </HorizontalView>
      { showSearch && (
        <>
          <Search
            value={ searchText ?? '' }
            placeholder={ searchPlaceholder }
            onChangeText={ (text: string) => onChangeSearchText?.(text) }
            testId='search'
            rounded={ true }
          />
          <Spacer height={ 8 } />
        </>
      ) }
    </VerticalView>
  );
};

export default BaseBottomSheetHeader;
