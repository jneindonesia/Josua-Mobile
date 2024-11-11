import React, { useCallback } from 'react';
import {
  BottomSheetModal,
  BottomSheetModalProps,
  BottomSheetProps,
  BottomSheetBackdrop,
  BottomSheetBackdropProps,
} from '@gorhom/bottom-sheet';
import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';
import { useBottomSheetBackHandler } from 'app/utils/useActions/useBackHandler';

export interface BaseBottomSheetProps extends Omit<BottomSheetModalProps, 'snapPoints'> {
  showDragHandler?: boolean;
  snapPoints?: BottomSheetProps['snapPoints'];
}

export type BaseBottomSheet = BottomSheetModal;

export const BaseBottomSheet = React.forwardRef<BottomSheetModal, BaseBottomSheetProps>(
  ({ showDragHandler = true, index = 0, snapPoints = ['45%', '90%'], style, onDismiss, ...props }, ref) => {
    useStyle(showDragHandler);
    const bottomSheetRef = ref as React.RefObject<BaseBottomSheet>;

    function onHidden() {
      onDismiss?.();
    }

    const { handleSheetPositionChange } = useBottomSheetBackHandler({ bottomSheetRef });

    const renderBackdrop = useCallback(
      (_props: BottomSheetBackdropProps) => (
        <BottomSheetBackdrop
          { ..._props }
          style={ [_props.style, { backgroundColor: 'black' }] }
          pressBehavior={ 'close' }
          disappearsOnIndex={ -1 }
          opacity={ 0.6 }
        />
      ),
      []
    );

    return (
      <BottomSheetModal
        ref={ ref }
        onChange={ handleSheetPositionChange }
        index={ index }
        snapPoints={ snapPoints }
        // enablePanDownToClose
        // handleIndicatorStyle={ styles.handle }
        style={ [{ paddingHorizontal: 16 }, style] }
        backdropComponent={ renderBackdrop }
        onDismiss={ onHidden }
        { ...props }
      />
    );
  }
);

export default BaseBottomSheet;

function useStyle(showDragHandler: boolean) {
  const { colors } = useTheme<Theme>();

  const styles = StyleSheet.create({
    handle: showDragHandler
      ? {
        width: 56,
        height: 6,
        borderRadius: 24,
        backgroundColor: colors.greyDark,
      }
      : {
        width: 0,
        height: 0,
        borderRadius: 0,
        opacity: 0,
        backgroundColor: colors.greyDark,
      },
  });

  return {
    styles,
    colors,
  };
}
