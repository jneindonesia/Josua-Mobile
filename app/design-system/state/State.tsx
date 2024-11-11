import React, { ReactElement } from 'react';
import { View } from 'react-native';

export type State<T> = {
  data?: T;
  loading?: boolean;
  error?: Error | null | unknown;
};

export type StateViewProps<T> = {
  state: State<T>;
  loadingView: ReactElement | null;
  errorView: (e: Error | unknown) => ReactElement | null;
  contentView: (data: T) => ReactElement | null;
  hideContentView?: boolean;
  hideErrorView?: boolean;
  loadingExt?: boolean;
};

export function StateView<T>({
  state,
  loadingView,
  errorView,
  contentView,
  loadingExt,
}: StateViewProps<T>): ReactElement | null {
  const loading = state.loading || loadingExt;
  const isError = state.error !== undefined && state.error !== null;

  if (loading) { return loadingView; }
  if (!loading && isError) {
    return errorView(state.error);
  }
  if (state.data === undefined || state.data === null) {
    return errorView(Error('data null or undefined'));
  }
  return <>{ contentView(state.data) }</>;
}

export type StateViewRefProps<T> = {
  state: State<T>;
  loadingView: ReactElement | null;
  errorView: (e: Error | unknown) => ReactElement | null;
  hideContentView?: boolean;
  hideErrorView?: boolean;
  loadingExt?: boolean;
  contentView: (data?: T) => ReactElement | null;
};

export function StateViewRef<T>({
  state,
  loadingView,
  errorView,
  contentView,
  hideContentView = false,
  hideErrorView = false,
  loadingExt,
}: StateViewRefProps<T>): ReactElement | null {
  // if (state.loading) return loadingView;
  // if (state.error !== undefined && state.error !== null) {
  //   return errorView(state.error);
  // }
  // if (state.data === undefined || state.data === null) {
  //   return errorView(Error('data null or undefined'));
  // }
  // return <>{contentView(state.data)}</>;
  const loading = state.loading || loadingExt;
  const isError = state.error !== undefined && state.error !== null;
  const height = loading || isError || hideContentView ? 0 : undefined;
  const opacity = loading || isError || hideContentView ? 0 : 1;
  return (
    <>
      { loading && loadingView }
      { !loading && isError && !hideErrorView && errorView(state.error) }
      <View style={ { height: height, opacity } }>{ contentView(state.data) }</View>
    </>
  );
}
