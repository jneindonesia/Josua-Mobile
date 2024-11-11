import React, { ReactElement } from 'react';
import { SectionList, SectionListProps, SectionListData } from 'react-native';
import { State } from 'app/design-system/state/State';

export type BaseSectionListProps<ItemT, SectionT> = Omit<SectionListProps<ItemT, SectionT>, 'sections'> & {
  // meta: {
  //   page?: number;
  //   size?: number;
  //   totalPage?: number;
  //   totalData?: number;
  // };

  sectionsState: State<ReadonlyArray<SectionListData<ItemT, SectionT>>>;
  loadingView: ReactElement | null;
  errorView: (e: Error | unknown) => ReactElement | null;
  notFoundView?: () => ReactElement | null;
  pagingLoadingView: ReactElement | null;
  pagingErrorView: (e: Error | unknown, errorPage: number) => ReactElement | null;
  // onNextPage: (nextPage: number) => void;
};

export function BaseSectionList<T, SectionItem>({
  // meta,
  sectionsState,
  loadingView,
  errorView,
  renderItem,
  renderSectionHeader,
  ItemSeparatorComponent,
  notFoundView,
  pagingLoadingView, // perlu default view
  pagingErrorView, // perlu default view
  ListFooterComponent,
  // onNextPage,
  ListEmptyComponent,
  ...props
}: BaseSectionListProps<T, SectionItem>): ReactElement | null {
  function RenderEmpty():
    | React.ReactElement<any, string | React.JSXElementConstructor<any>>
    | React.ComponentType<any>
    | null
    | undefined {
    if (sectionsState.loading) {
      return loadingView;
    }
    if (sectionsState.error !== undefined && sectionsState.error !== null) {
      return errorView(sectionsState.error);
    }
    if (
      (sectionsState.data === undefined || sectionsState.data === null || sectionsState.data.length === 0) &&
      notFoundView !== undefined
    ) {
      return notFoundView();
    }
    return ListEmptyComponent;
  }

  return (
    <SectionList
      sections={ sectionsState.data ?? [] }
      renderItem={ renderItem }
      ListFooterComponent={ () => {
        if (sectionsState.loading && !!pagingLoadingView) {
          return pagingLoadingView;
        }
        if (sectionsState.error !== undefined && sectionsState.error !== null && !!pagingErrorView) {
          return pagingErrorView(sectionsState.error, 0);
        }
        return <>{ ListFooterComponent }</>;
      } }
      keyExtractor={ (_, index) => index.toString() }
      onEndReachedThreshold={ 0.1 }
      renderSectionHeader={ renderSectionHeader }
      ItemSeparatorComponent={ ItemSeparatorComponent }
      ListEmptyComponent={ RenderEmpty() }
      { ...props }
    />
  );
}
