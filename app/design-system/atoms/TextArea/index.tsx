import React, { FC } from 'react';
import { TextInput, TextInputProps, StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { BaseFieldBoxProps, BaseFieldBox } from '../FieldControl';
import { Theme } from '../../theme';
import { getTestId } from '../../utils';

export interface TextAreaProps
  extends Omit<TextInputProps, 'onChange' | 'value'>,
    Omit<BaseFieldBoxProps, 'children'> {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  maxLength?: number;
  numberOfLines?: number;
  testId?: string;
}

export const TextArea: FC<TextAreaProps> = ({
  value,
  onChange,
  editable,
  placeholder,
  maxLength,
  numberOfLines,
  testId,
  ...props
}) => {
  const { placeholderColor, styles } = useStyle();

  //   const hintRight = typeof maxLength === 'number' ? `${value.length}/${maxLength}` : undefined;

  return (
    <BaseFieldBox editable={ editable } { ...props }>
      <TextInput
        style={ styles.textInput }
        value={ value }
        editable={ editable }
        underlineColorAndroid='transparent'
        placeholder={ placeholder }
        placeholderTextColor={ placeholderColor }
        multiline
        maxLength={ maxLength }
        numberOfLines={ numberOfLines }
        onChangeText={ text => {
          onChange(text);
        } }
        { ...getTestId(`edit_text_${testId}`) }
      />
    </BaseFieldBox>
  );
};

function useStyle() {
  const { colors, spacing, textVariants } = useTheme<Theme>();
  const styles = StyleSheet.create({
    textInput: {
      ...textVariants.body,
      color: colors.textMidnight,
      paddingHorizontal: spacing.s,
      minHeight: 130,
      maxHeight: 250,
      width: '100%',
      backgroundColor: colors.transparent,
      textAlignVertical: 'top',
    },
  });
  return {
    styles,
    placeholderColor: colors.textInactive,
  };
}
