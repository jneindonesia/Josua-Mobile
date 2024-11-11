import React, { FC, ReactNode } from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  KeyboardTypeOptions,
} from 'react-native';
import { useTheme } from '@shopify/restyle';
import { VerticalView } from '../LayoutView';
import { Text } from '../Text';
import { BaseFieldBox, BaseFieldBoxProps } from '../FieldControl';
import { Theme } from '../../theme';
import { getNumberOnly, isNoAlphabet } from 'app/utils';
import { getTestId } from '../../utils';

export interface TextInputProps
  extends Omit<RNTextInputProps, 'onChange' | 'value'>,
    Omit<BaseFieldBoxProps, 'children'> {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  valueType?: 'NUMBER' | 'STRING';
  testId?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const TextInput = React.forwardRef<RNTextInput, TextInputProps>(
  (
    {
      value,
      onChange,
      editable,
      placeholder,
      valueType = 'STRING',
      testId,
      iconPosition = 'left',
      icon,
      prefix,
      suffix,
      ...props
    },
    ref
  ) => {
    const { placeholderColor, styles } = useStyle();

    function getValue(): string {
      if (value === undefined) {
        return '';
      }
      if (isNoAlphabet(value)) {
        return String(value).replace(/^(\d+.?\d{0,4})\d*$/, '$1');
      } else {
        return value.toString();
      }
    }

    function onChangeText(text: string) {
      if (valueType === 'NUMBER' && text.length >= 1) {
        const textNumberOnly = getNumberOnly(text);
        onChange(textNumberOnly);
      } else {
        onChange(text);
      }
    }

    function getKeyboardType(): KeyboardTypeOptions | undefined {
      if (valueType === 'NUMBER') {
        return 'numeric';
      }
      return props.keyboardType;
    }

    const showIconLeft = iconPosition === 'left' && icon !== undefined;
    const showIconRight = iconPosition === 'right' && icon !== undefined;

    const IconView = () => {
      return <VerticalView style={ styles.iconContainer }>{ icon }</VerticalView>;
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
      <BaseFieldBox editable={ editable } prefix={ <PrefixView /> } suffix={ <SuffixView /> } { ...props }>
        <RNTextInput
          ref={ ref }
          style={ styles.textInput }
          value={ getValue() }
          editable={ editable }
          underlineColorAndroid='transparent'
          placeholder={ placeholder }
          placeholderTextColor={ placeholderColor }
          keyboardType={ getKeyboardType() }
          onChangeText={ text => {
            onChangeText(text);
          } }
          { ...getTestId(`edit_text_${testId}`) }
        />
      </BaseFieldBox>
    );
  }
);

function useStyle() {
  const { colors, spacing, textVariants } = useTheme<Theme>();
  const styles = StyleSheet.create({
    textInput: {
      ...textVariants.body,
      color: colors.textMidnight,
      paddingHorizontal: spacing.m,
      height: 50,
      lineHeight: 18, // make sure lineHeight value same with fontSize + 2 value at TextInput ios
      // width: '100%'
      flex: 1,
    },
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
    placeholderColor: colors.textInactive,
  };
}
