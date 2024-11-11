import React, { FC, ReactNode, useState } from 'react';
import {
  TextInput as RNTextInput,
  TextInputProps as RNTextInputProps,
  StyleSheet,
  KeyboardTypeOptions,
  Platform,
} from 'react-native';
import { useTheme } from '@shopify/restyle';
import { VerticalView } from '../LayoutView';
import { BaseFieldBox, BaseFieldBoxProps } from '../FieldControl';
import { Theme } from '../../theme';
import { getNumberOnly } from 'app/utils';
import { getTestId } from '../../utils';
import { BaseIcon } from '../Icon';
import { IconButton } from '../Button';
import { IcEye, IcEyeClosed } from 'svgs/index';

export interface TextInputPasswordProps
  extends Omit<RNTextInputProps, 'onChange' | 'value'>,
    Omit<BaseFieldBoxProps, 'children' | 'prefix' | 'suffix'> {
  value: string;
  onChange: (value: string) => void;
  placeholder?: string;
  valueType?: 'NUMBER' | 'STRING';
  testId?: string;
  icon?: ReactNode;
  iconPosition?: 'left' | 'right';
}

export const TextInputPassword = React.forwardRef<RNTextInput, TextInputPasswordProps>(
  (
    { value, onChange, editable, placeholder, valueType = 'STRING', testId, onFocus, onBlur, ...props },
    ref,
  ) => {
    const { placeholderColor, styles } = useStyle();

    const [textVisibillty, setTextVisibillty] = useState(false);

    function getValue(): string {
      if (value === undefined) {
        return '';
      }

      return value.toString();
    }

    function onChangeText(text: string) {
      if (valueType === 'NUMBER' && text.length >= 1) {
        const textNumberOnly = getNumberOnly(text);
        onChange(textNumberOnly);
      } else {
        onChange(text);
      }
    }

    function switchVisibillity() {
      setTextVisibillty(!textVisibillty);
    }

    function getKeyboardType(): KeyboardTypeOptions | undefined {
      if (valueType === 'NUMBER') {
        return 'numeric';
      }
      return props.keyboardType;
    }

    const SuffixView: FC<{}> = () => {
      return (
        <VerticalView style={ styles.suffix }>
          <IconButton onPress={ switchVisibillity }>
            <BaseIcon icon={ textVisibillty ? IcEye : IcEyeClosed } size={ 20 } color='black' />
          </IconButton>
        </VerticalView>
      );
    };

    return (
      <BaseFieldBox editable={ editable } suffix={ <SuffixView /> } { ...props }>
        <RNTextInput
          ref={ refInputElement => {
            if (refInputElement) {
              refInputElement.setNativeProps({ style: { fontFamily: Platform.OS === 'android' ? 'Ubuntu-Regular' : 'Ubuntu' } });
            }
            if (ref) {
              if (typeof ref === 'function') {
                ref(refInputElement);
              } else if (typeof ref === 'object') {
                ref.current = refInputElement;
              }
            }
          } }
          // ref={ ref }
          style={ styles.textInput }
          value={ getValue() }
          editable={ editable }
          underlineColorAndroid='transparent'
          secureTextEntry={ !textVisibillty }
          placeholder={ placeholder }
          placeholderTextColor={ placeholderColor }
          keyboardType={ getKeyboardType() }
          onChangeText={ text => {
            onChangeText(text);
          } }
          onFocus={ onFocus }
          onBlur={ onBlur }
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
      paddingLeft: spacing.m,
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
