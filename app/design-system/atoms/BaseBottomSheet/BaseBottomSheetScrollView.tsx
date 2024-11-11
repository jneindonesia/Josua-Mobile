import React from 'react';
import { BottomSheetProps, BottomSheetScrollView } from '@gorhom/bottom-sheet';
import { BaseBottomSheet, BaseBottomSheetProps } from './BaseBottomSheet';
import { ScrollViewProps } from 'react-native';
import BaseBottomSheetHeader, { BaseBottomSheetHeaderProps } from './BaseBottomSheetHeader';

export interface BaseBottomSheetScrollViewProps
  extends Omit<BaseBottomSheetProps, 'children' | 'snapPoints'>,
    BaseBottomSheetHeaderProps {
  children: ScrollViewProps['children'];
  hideDefaultHeader?: boolean;
  snapPoints?: BottomSheetProps['snapPoints'];
}
export type BaseBottomSheetScrollView = BaseBottomSheet;

export const BaseBottomSheetScrollView = React.forwardRef<
  BaseBottomSheetScrollView,
  BaseBottomSheetScrollViewProps
>(
  (
    {
      title,
      description,
      topActionText,
      hideDefaultHeader = false,
      onClickTopAction,
      children,
      snapPoints = ['45%', '90%'],
      ...props
    },
    ref
  ) => {
    return (
      <BaseBottomSheet ref={ ref } snapPoints={ snapPoints } { ...props }>
        <BottomSheetScrollView>
          <>
            { !hideDefaultHeader && (
              <BaseBottomSheetHeader
                title={ title }
                description={ description }
                topActionText={ topActionText }
                onClickTopAction={ onClickTopAction }
              />
            ) }
            { children }
          </>
        </BottomSheetScrollView>
      </BaseBottomSheet>
    );
  }
);

export default BaseBottomSheetScrollView;
