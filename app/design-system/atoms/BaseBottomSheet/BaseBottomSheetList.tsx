import React from 'react';
import { FlatListProps } from 'react-native';
import { BottomSheetFlatList } from '@gorhom/bottom-sheet';
import { BaseBottomSheet, BaseBottomSheetProps } from './BaseBottomSheet';
import BaseBottomSheetHeader, { BaseBottomSheetHeaderProps } from './BaseBottomSheetHeader';

export type BaseBottomSheetList = BaseBottomSheet;

export interface BaseBottomSheetListProps<ItemT> extends Omit<BaseBottomSheetProps, 'children'> {
  flatListProps: FlatListProps<ItemT>;
  testId?: string;
  headerOption?: Partial<BaseBottomSheetHeaderProps> & {
    showDefaultHeader?: boolean;
  };
}

function BaseBottomSheetListInner<T>(
  props: BaseBottomSheetListProps<T>,
  ref: React.ForwardedRef<BaseBottomSheetList>
) {
  const { headerOption, flatListProps, ..._props } = props;
  return (
    <BaseBottomSheet ref={ ref } { ..._props }>
      { headerOption?.showDefaultHeader && <BaseBottomSheetHeader { ...headerOption } /> }
      <BottomSheetFlatList { ...flatListProps } />
    </BaseBottomSheet>
  );
}

export const BaseBottomSheetList = React.forwardRef(BaseBottomSheetListInner);
