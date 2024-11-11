import React, { useState, useEffect, useImperativeHandle } from 'react';
import { Animated, StyleSheet, Dimensions } from 'react-native';
import { VerticalView, HorizontalSpaceBetween } from '../LayoutView';
import { BaseButton } from '../Button';
import { Text } from '../Text';
import { createBox, useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';
// import { IcCloseWhite16 } from 'svgs/index';

const WIDTH = Dimensions.get('window').width;

const AnimatedBox = createBox<Theme, React.ComponentProps<typeof Animated.View>>(Animated.View);

type SnacbarType = 'success' | 'error' | 'warning' | 'info';

export type SnackBarProps = {
  title?: string;
  message?: string;
  btnText?: string;
  type?: SnacbarType;
  duration?: number;
  onPress?: () => void;
  visible?: boolean;
  showCloseIcon?: boolean;
  onClose?: () => void;
};

export type SnackBarActionsParams = SnackBarProps;

export type SnackBar = {
  show: (params: SnackBarActionsParams) => void;
};

export const SnackBar = React.forwardRef<SnackBar, SnackBarProps>((props, ref) => {
  const { styles, getBgColorByType } = useStyle();

  const [visible, setVisible] = useState<boolean>(false);
  const [params, setParams] = useState<SnackBarActionsParams | undefined>();

  useImperativeHandle(ref, () => ({
    show: (nParams: SnackBarActionsParams) => {
      setParams(nParams);
      setVisible(nParams.visible ?? false);
      if (nParams.duration !== undefined) {
        setTimeout(() => {
          setVisible(false);
          setParams(undefined);
        }, nParams.duration);
      }
    },
  }));

  const contentVisible = props.visible || visible;
  const title = props.title || params?.title;
  const message = props.message || params?.message;
  const btnText = props.btnText || params?.btnText;
  const type = props.type || params?.type;
  // const showCloseIcon = props.showCloseIcon || params?.showCloseIcon;
  const onPress = props.onPress || params?.onPress;

  const [animationState] = useState({
    top: new Animated.Value(0),
  });

  useEffect(() => {
    Animated.timing(animationState.top, {
      toValue: contentVisible ? 24 : 0,
      duration: 150,
      useNativeDriver: false,
    }).start();
  }, [contentVisible, message]);

  if (!contentVisible) {
    return null;
  }

  return (
    <AnimatedBox
      paddingHorizontal='m'
      style={ [{ bottom: animationState.top }, styles.container, { backgroundColor: getBgColorByType(type) }] }>
      <HorizontalSpaceBetween paddingVertical={ 's' } alignItems='center' flex={ 1 }>
        <VerticalView flex={ 1 }>
          <Text variant='subtitle' color='white' alignItems='flex-start'>
            { title }
          </Text>
          { !!message && (
            <Text variant='body3' color='white' alignItems='flex-start'>
              { message }
            </Text>
          ) }
        </VerticalView>
        { btnText && (
          <BaseButton
            onPress={ () => {
              props.onClose?.();
              onPress?.();
            } }>
            <Text variant='body2' color='white'>
              { btnText }
            </Text>
          </BaseButton>
        ) }
        { /* {showCloseIcon && (
          <IconButton onPress={props.onClose}>
            <BaseIcon icon={IcCloseWhite16} size={20} />
          </IconButton>
        )} */ }
      </HorizontalSpaceBetween>
    </AnimatedBox>
  );
});

function useStyle() {
  const { colors } = useTheme<Theme>();

  function getBgColorByType(type?: SnacbarType): string {
    switch (type) {
    case 'success':
      return colors.eventSuccess;
    case 'error':
      return colors.eventError;
    case 'warning':
      return colors.eventWarning;
    case 'info':
      return colors.textMidnight;
    default:
      return colors.transparent;
    }
  }

  const styles = StyleSheet.create({
    container: {
      position: 'absolute',
      width: WIDTH - 16,
      marginHorizontal: 8,
      shadowOpacity: 0.2,
      shadowRadius: 0.7,
      zIndex: 10,
      borderRadius: 8,
    },
  });

  return {
    styles,
    getBgColorByType,
  };
}
