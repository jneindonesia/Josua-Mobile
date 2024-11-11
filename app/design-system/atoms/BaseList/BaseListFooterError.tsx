import React from 'react';
import { VerticalView } from '../LayoutView';
import { Text } from '../Text';
import { TextButton } from '../Button';
import { BaseListFooterProps } from './BaseList.interface';

export const BaseListFooterError: React.FC<{ onReload: () => void }> = ({ onReload }) => {
  return (
    <VerticalView alignItems='center' width='100%' paddingVertical='m'>
      <Text variant='body4' mb='xM'>
        Gagal memuat data
      </Text>
      <TextButton title='Muat Ulang' onPress={ onReload } />
    </VerticalView>
  );
};

export const BasePagingErrorView: React.FC<BaseListFooterProps> = ({ onRetryLoadMore }) => {
  return (
    <VerticalView alignItems='center' width='100%' paddingVertical='m'>
      <Text variant='body4' mb='xM'>
        Gagal memuat data
      </Text>
      <TextButton title='Muat Ulang' onPress={ onRetryLoadMore } />
    </VerticalView>
  );
};
