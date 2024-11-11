import React, { ReactElement } from 'react';
import { State } from '../../state/State';

export interface ErrorView {
  error?: Error | unknown;
  onRetry?: () => void;
}

export interface PagingErrorView {
  error?: Error | unknown;
  onRetryLoadMore?: () => void;
}

export type BaseListProps<T> = {
  dataState: State<T[]>;
  loadingView: ReactElement | null;
  errorView: React.FC<ErrorView>;
  pagingLoadingView?: ReactElement | null;
  pagingErrorView?: React.FC<PagingErrorView>;
  onRetry?: () => void;
  onRetryLoadMore?: () => void;
};

export type BaseListFooterProps = {
  showPagingLoading?: boolean;
  showPagingError?: boolean;
  pagingLoadingView?: ReactElement | null;
  pagingErrorView?: React.FC<PagingErrorView>;
  error?: Error | unknown | null;
  onRetryLoadMore?: () => void;
};

export type BaseListEmptyProps = {
  loadingView?: ReactElement | null;
  errorView?: React.FC<ErrorView>;
  error?: Error | unknown | null;
  loading?: boolean;
  onRetry?: () => void;
};
