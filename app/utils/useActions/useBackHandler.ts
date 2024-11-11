import { useCallback, useRef, DependencyList } from 'react';
import { BackHandler } from 'react-native';
import { useFocusEffect } from '@react-navigation/native';

type BackHandlerFunction = () => boolean;

export function useBackHandler(handler: BackHandlerFunction, depens: DependencyList = []) {
  useFocusEffect(
    useCallback(() => {
      BackHandler.addEventListener('hardwareBackPress', handler);

      return () => {
        BackHandler.removeEventListener('hardwareBackPress', handler);
      };
    }, depens)
  );
}

type UseBottomSheetBackHandlerProps = {
  bottomSheetRef: React.RefObject<any>; // Adjust the type as per your bottomSheetRef type
};

export const useBottomSheetBackHandler = ({ bottomSheetRef }: UseBottomSheetBackHandlerProps) => {
  const backHandlerSubscriptionRef = useRef<ReturnType<typeof BackHandler.addEventListener> | null>(null);

  const handleSheetPositionChange = useCallback(
    (index: number) => {
      const isBottomSheetVisible = index >= 0;
      if (isBottomSheetVisible && !backHandlerSubscriptionRef.current) {
        // setup the back handler if the bottom sheet is right in front of the user
        backHandlerSubscriptionRef.current = BackHandler.addEventListener('hardwareBackPress', () => {
          bottomSheetRef.current?.dismiss();
          return true;
        });
      } else if (!isBottomSheetVisible) {
        backHandlerSubscriptionRef.current?.remove();
        backHandlerSubscriptionRef.current = null;
      }
    },
    [bottomSheetRef, backHandlerSubscriptionRef]
  );

  return { handleSheetPositionChange };
};

export default { useBackHandler };
