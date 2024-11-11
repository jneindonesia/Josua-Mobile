import React, { FC } from 'react';
import { useTheme } from '@shopify/restyle';
import { Text } from '../Text';
import { HorizontalView } from '../LayoutView';
import { Theme } from '../../theme';
import { StyleSheet } from 'react-native';
import { getTestId, isBlank } from '../../utils';

export type BaseHelperTextPropsProps = {
  error?: string;
  hint?: string;
  hintRight?: string;
  editable?: boolean;
  testId?: string;
};

export const BaseHelperText: FC<BaseHelperTextPropsProps> = ({
  hint,
  error,
  hintRight,
  editable = false,
  testId,
}) => {
  const helperText = error || hint;

  const { styles } = useStyle(editable, error);
  if (isBlank(helperText) && isBlank(hintRight)) {
    return null;
  }
  return (
    <HorizontalView justifyContent={ 'space-between' }>
      { !!helperText && (
        <Text variant={ 'body3' } style={ styles.helperText } { ...getTestId(`helper_text${testId}`) }>
          { helperText }
        </Text>
      ) }
      { !!hintRight && (
        <Text variant={ 'body3' } style={ styles.countHelper } { ...getTestId(`helper_text_right${testId}`) }>
          { hintRight }
        </Text>
      ) }
    </HorizontalView>
  );
};

function useStyle(editable: boolean, error?: string) {
  const { colors } = useTheme<Theme>();

  function getHelperColor(): string {
    if (typeof error === 'string' && error.length > 0) {
      return colors.textError;
    } else if (!editable) {
      return colors.border;
    }
    return colors.textInactive;
  }

  function getCountColor(): string {
    if (!editable) {
      return colors.border;
    }
    return colors.textInactive;
  }

  const styles = StyleSheet.create({
    helperText: {
      color: getHelperColor(),
    },
    countHelper: {
      color: getCountColor(),
    },
  });

  return {
    styles,
  };
}
