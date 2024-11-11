import React, { FC } from 'react';
import { useTheme } from '@shopify/restyle';
import { HorizontalView, VerticalView } from '../LayoutView';
import { Text, TextProps } from '../Text';
// import { Tooltip } from '../Tooltip';
import { Theme } from '../../theme';
import { StyleProp, StyleSheet, ViewStyle } from 'react-native';
import { getTestId } from '../../utils';

export type BaseLabelProps = {
  label?: string;
  subLabel?: string;
  optional?: boolean;
  required?: boolean;
  tooltip?: string;
  badge?: string;
  badgeColor?: string;
  testId?: string;
  description?: string;
  containerStyle?: StyleProp<ViewStyle>;
  labelProps?: TextProps;
};

export const BaseLabel: FC<BaseLabelProps> = ({
  label,
  subLabel,
  optional = false,
  required = false,
  // tooltip,
  badge,
  badgeColor,
  testId,
  description,
  containerStyle,
  labelProps,
}) => {
  const { styles } = useStyle();

  if (!label) { return null; }
  return (
    <VerticalView style={ containerStyle }>
      <HorizontalView alignItems={ 'center' } flexWrap={ 'wrap' }>
        { !!label && (
          <Text
            variant={ labelProps?.variant ?? 'subtitle2' }
            color={ labelProps?.color ?? 'textMidnight' }
            { ...getTestId(`label_${testId}`) }
            { ...labelProps }>
            { label }
          </Text>
        ) }
        { subLabel && (
          <Text variant={ 'body4' } ml='xs' { ...getTestId(`sublabel_${testId}`) }>
            { subLabel }
          </Text>
        ) }
        { optional && (
          <Text variant={ 'body2' } color='textInactive' ml='xs' { ...getTestId(`optional_${testId}`) }>
            (Optional)
          </Text>
        ) }
        { required && (
          <Text variant={ 'subtitle2' } color='textError' ml='xs' { ...getTestId(`required_${testId}`) }>
            *
          </Text>
        ) }
        { !!badge && (
          <Text
            variant={ 'body2' }
            ml='xs'
            style={ [styles.status, { backgroundColor: badgeColor }] }
            { ...getTestId(`badge_${testId}`) }>
            { badge }
          </Text>
        ) }
        { /* { !!tooltip && <Tooltip title={ label } text={ tooltip } testId={ testId } /> } */ }
      </HorizontalView>
      { !!description && (
        <Text variant={ 'body2' } color='textLight' mt='s' { ...getTestId(`desc_${testId}`) }>
          { description }
        </Text>
      ) }
    </VerticalView>
  );
};

function useStyle() {
  const { colors, spacing } = useTheme<Theme>();

  const styles = StyleSheet.create({
    status: {
      backgroundColor: colors.eventSuccess,
      color: colors.white,
      paddingHorizontal: spacing.m,
      paddingVertical: spacing.xxs,
      borderRadius: 5,
    },
  });

  return {
    styles,
  };
}
