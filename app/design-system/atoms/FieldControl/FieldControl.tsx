import React, { FC, ReactElement, ReactNode } from 'react';
import { View, StyleProp, ViewStyle } from 'react-native';
import { BaseLabelProps, BaseLabel } from './BaseLabel';
import { BaseHelperText, BaseHelperTextPropsProps } from './BaseHelperText';
import { BaseFieldBoxProps, BaseFieldBox } from './BaseFieldBox';

export type FieldControlProps = BaseLabelProps &
  BaseHelperTextPropsProps & {
    editable?: boolean;
    children: ReactElement | ReactNode;
    containerStyle?: StyleProp<ViewStyle>;
    testId?: string;
  };

export const FieldControl: FC<FieldControlProps> = ({ children, containerStyle, ...props }) => {
  return (
    <View style={ containerStyle }>
      <BaseLabel { ...props } containerStyle={ { marginBottom: 4 } } />
      { children }
      <BaseHelperText { ...props } />
    </View>
  );
};

export type FieldControlContainerProps = FieldControlProps & BaseFieldBoxProps;

export const FieldControlContainer: FC<FieldControlContainerProps> = ({
  editable = true,
  children,
  error,
  containerStyle,
  boxStyle,
  ...props
}) => {
  return (
    <FieldControl editable={ editable } error={ error } containerStyle={ containerStyle } { ...props }>
      <BaseFieldBox editable={ editable } error={ error } boxStyle={ boxStyle }>
        { children }
      </BaseFieldBox>
    </FieldControl>
  );
};
