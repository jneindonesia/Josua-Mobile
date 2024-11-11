import React, { ReactElement } from 'react';
import { FlatList, FlatListProps } from 'react-native';
import { State } from '../../state/State';
import { Loading } from '../Loading';

export type BaseFlatListProps<T> = Omit<FlatListProps<T>, 'data'> & {
  dataState: State<T[]>;
  loadingView: ReactElement | null;
  errorView: (e: Error | unknown) => ReactElement | null;
  notFoundView?: () => ReactElement | null;
  pagingLoadingView?: ReactElement | null;
  pagingErrorView?: (e: Error | unknown) => ReactElement | null;
};

function BaseFlatListInner<T>(
  {
    dataState,
    loadingView,
    errorView,
    renderItem,
    notFoundView,
    pagingLoadingView = <Loading />, // perlu default view
    pagingErrorView, // perlu default view
    ListFooterComponent,
    ListEmptyComponent,
    ...props
  }: BaseFlatListProps<T>,
  ref: React.ForwardedRef<FlatList>
): ReactElement | null {
  const data = React.useMemo(() => {
    return dataState.data ?? [];
  }, [dataState]);

  function RenderEmpty():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ComponentType<any>
    | null
    | undefined {
    if (dataState.loading) {
      return loadingView;
    }
    if (dataState.error !== undefined && dataState.error !== null) {
      return errorView(dataState.error);
    }
    if (
      (dataState.data === undefined || dataState.data === null || dataState.data.length === 0) &&
      notFoundView !== undefined
    ) {
      return notFoundView();
    }
    return ListEmptyComponent;
  }

  return (
    <FlatList
      ref={ ref }
      data={ data }
      renderItem={ renderItem }
      ListFooterComponent={ () => {
        if (dataState.loading && data.length >= 10) {
          return pagingLoadingView;
        }
        if (
          dataState.error !== undefined &&
          dataState.error !== null &&
          data.length >= 10 &&
          !!pagingErrorView
        ) {
          return pagingErrorView(dataState.error);
        }
        return <>{ ListFooterComponent }</>;
      } }
      keyExtractor={ (_, index) => index.toString() }
      ListEmptyComponent={ RenderEmpty() }
      onEndReachedThreshold={ 0.3 }
      { ...props }
    />
  );
}

export type BaseFlatList = FlatList;

export const BaseFlatList = React.forwardRef(BaseFlatListInner);
