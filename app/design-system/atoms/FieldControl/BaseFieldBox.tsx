import React, { FC, ReactElement, ReactNode } from 'react';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';
import { StyleSheet, ViewStyle, StyleProp, View } from 'react-native';

export type BaseFieldBoxProps = {
  editable?: boolean;
  error?: string;
  children: ReactElement | ReactNode;
  boxStyle?: StyleProp<ViewStyle>;
  suffix?: ReactElement | ReactNode;
  prefix?: ReactElement | ReactNode;
};

export const BaseFieldBox: FC<BaseFieldBoxProps> = ({
  editable = true,
  error,
  children,
  boxStyle,
  prefix,
  suffix,
}) => {
  const { styles } = useStyle(editable, error);
  return (
    <View style={ [styles.container, boxStyle] }>
      { prefix }
      { children }
      { suffix }
    </View>
  );
};

function useStyle(editable: boolean, error?: string) {
  const { colors } = useTheme<Theme>();

  function getBorderColor(): string {
    if (typeof error === 'string' && error.length > 0) {
      return colors.textError;
    } else if (!editable) {
      return colors.border;
    }
    return colors.border;
  }

  function getBackgroudColor(): string {
    if (!editable) {
      return colors.eventInactive;
    }
    return colors.white;
  }

  const styles = StyleSheet.create({
    container: {
      borderWidth: 1,
      borderColor: getBorderColor(),
      borderRadius: 5,
      // width: '100%',
      flexDirection: 'row',
      backgroundColor: getBackgroudColor(),
    },
  });
  return {
    styles,
  };
}
