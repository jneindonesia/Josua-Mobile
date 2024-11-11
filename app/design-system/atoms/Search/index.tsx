import React, { FC } from 'react';
import { BaseFieldBox } from '../FieldControl';
import { BaseIcon } from '../Icon';
import { TextInput, StyleSheet, ViewStyle, StyleProp, TextInputProps } from 'react-native';
import { Theme } from '../../theme';
import { useTheme } from '@shopify/restyle';
import { IcSearch } from 'svgs/index';
import { getTestId } from '../../utils';

type SearchProps = TextInputProps & {
  containerStyle?: StyleProp<ViewStyle>;
  placeholder?: string;
  testId?: string;
  rounded?: boolean;
};

export const Search: FC<SearchProps> = ({
  value,
  onChangeText,
  containerStyle,
  placeholder,
  testId,
  rounded = false,
  ...props
}) => {
  const { styles, placeholderColor } = useStyle(rounded);
  return (
    <BaseFieldBox
      prefix={ <BaseIcon icon={ IcSearch } size={ 16 } /> }
      boxStyle={ [styles.searchContainer, containerStyle] }>
      <TextInput
        style={ styles.searach }
        value={ value }
        multiline={ false }
        numberOfLines={ 1 }
        onChangeText={ text => onChangeText?.(text) }
        underlineColorAndroid='transparent'
        placeholder={ placeholder }
        placeholderTextColor={ placeholderColor }
        { ...getTestId(`edit_text_${testId}`) }
        { ...props }
      />
    </BaseFieldBox>
  );
};

function useStyle(rounded: boolean) {
  const { colors, spacing, textVariants } = useTheme<Theme>();
  const styles = StyleSheet.create({
    searach: {
      ...textVariants.body2,
      color: colors.textMidnight,
      height: 50,
      lineHeight: 16, // make sure lineHeight value same with fontSize + 2 value at TextInput ios
      width: '100%',
      paddingHorizontal: spacing.s,
    },
    searchContainer: {
      borderRadius: rounded ? 24 : 5,
      paddingHorizontal: spacing.m,
    },
  });

  return {
    styles,
    placeholderColor: colors.textLight,
  };
}
