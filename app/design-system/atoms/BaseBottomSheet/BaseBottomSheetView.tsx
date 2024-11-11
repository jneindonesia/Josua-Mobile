import React from 'react';
import { BottomSheetProps, BottomSheetView } from '@gorhom/bottom-sheet';
import { BaseBottomSheet, BaseBottomSheetProps } from './BaseBottomSheet';
import { ViewProps } from 'react-native';
import BaseBottomSheetHeader, { BaseBottomSheetHeaderProps } from './BaseBottomSheetHeader';

export interface BaseBottomSheetViewProps
  extends Omit<BaseBottomSheetProps, 'children' | 'snapPoints'>,
    BaseBottomSheetHeaderProps {
  children: ViewProps['children'];
  hideDefaultHeader?: boolean;
  snapPoints?: BottomSheetProps['snapPoints'];
}
export type BaseBottomSheetView = BaseBottomSheet;

export const BaseBottomSheetView = React.forwardRef<BaseBottomSheetView, BaseBottomSheetViewProps>(
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
        <BottomSheetView>
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
        </BottomSheetView>
      </BaseBottomSheet>
    );
  }
);

export default BaseBottomSheetView;
