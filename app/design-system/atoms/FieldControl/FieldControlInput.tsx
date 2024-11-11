import React, { FC, ReactNode } from 'react';
import { useTheme } from '@shopify/restyle';
import { Text } from '../../atoms';
import { Theme } from '../../theme';
import { StyleSheet, View } from 'react-native';
import { BaseFieldBox, BaseFieldBoxProps } from './BaseFieldBox';
import { FieldControl, FieldControlProps } from './FieldControl';
import { getTestId } from '../../utils';
import { VerticalView } from '../LayoutView';
// import { VerticalView } from 'app/components/elements-hooks';

export type FieldControlInputProps = FieldControlProps &
  BaseFieldBoxProps & {
    icon?: ReactNode;
    iconPosition?: 'left' | 'right';
    testId?: string;
  };

export const FieldControlInput: FC<FieldControlInputProps> = ({
  editable = true,
  children,
  prefix,
  suffix,
  error,
  iconPosition = 'left',
  icon,
  containerStyle,
  boxStyle,
  testId,
  ...props
}) => {
  const { styles } = useStyle();
  const showIconLeft = iconPosition === 'left' && icon !== undefined;
  const showIconRight = iconPosition === 'right' && icon !== undefined;

  const IconView = () => {
    return <View style={ styles.iconContainer }>{ icon }</View>;
  };

  const PrefixView: FC<{}> = () => {
    if (prefix) {
      return (
        <VerticalView style={ styles.prefix }>
          <Text variant={ 'body' } color='textMidnight' { ...getTestId(`prefix_${testId}`) }>
            { prefix }
          </Text>
        </VerticalView>
      );
    }
    if (showIconLeft) {
      return <IconView />;
    }
    return null;
  };

  const SuffixView: FC<{}> = () => {
    if (showIconRight) {
      return <IconView />;
    }
    if (suffix) {
      return (
        <VerticalView style={ styles.suffix }>
          <Text variant={ 'body' } color='textMidnight' { ...getTestId(`suffix_${testId}`) }>
            { suffix }
          </Text>
        </VerticalView>
      );
    }
    return null;
  };

  return (
    <FieldControl
      editable={ editable }
      error={ error }
      containerStyle={ containerStyle }
      testId={ testId }
      { ...props }>
      <BaseFieldBox
        boxStyle={ boxStyle }
        prefix={ <PrefixView /> }
        suffix={ <SuffixView /> }
        editable={ editable }
        error={ error }>
        { children }
      </BaseFieldBox>
    </FieldControl>
  );
};

function useStyle() {
  const { colors, spacing } = useTheme<Theme>();

  const styles = StyleSheet.create({
    prefix: {
      height: 50,
      justifyContent: 'center',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      backgroundColor: colors.bgSurface,
      paddingHorizontal: spacing.m,
    },
    containerPrefixSuffix: {
      height: 50,
      justifyContent: 'center',
      borderTopLeftRadius: 5,
      borderBottomLeftRadius: 5,
      backgroundColor: colors.bgSurface,
      paddingHorizontal: spacing.m,
    },
    suffix: {
      height: 50,
      justifyContent: 'center',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      backgroundColor: colors.bgSurface,
      paddingHorizontal: spacing.m,
    },
    containerSuffix: {
      height: 50,
      justifyContent: 'center',
      borderTopRightRadius: 5,
      borderBottomRightRadius: 5,
      backgroundColor: colors.bgSurface,
      paddingHorizontal: spacing.m,
    },
    iconContainer: {
      minWidth: 20,
      minHeight: 20,
      alignSelf: 'center',
      paddingLeft: spacing.m,
      paddingRight: spacing.s,
    },
  });
  return {
    styles,
  };
}
