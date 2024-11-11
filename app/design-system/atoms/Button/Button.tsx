import React, { FC } from 'react';
import { StyleProp, ViewStyle } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from '../../theme';
import { Text } from '../Text';
import { BaseButton, BaseButtonProps } from './BaseButton';
import { BaseIcon } from '../Icon';
import { HorizontalView } from '../LayoutView';
import { Loading } from '../Loading';

type ButtonSize = 'large' | 'medium' | 'small';

export type ButtonProps = Omit<BaseButtonProps, 'children'> & {
  title: string;
  disabled?: boolean;
  size?: ButtonSize;
  fullWidth?: boolean;
  icon?: React.ForwardRefExoticComponent<{ width?: number; height?: number }>;
  color?: keyof Theme['colors'];
  loading?: boolean;
};

export const PrimaryButton: FC<ButtonProps & { backgroundColor?: keyof Theme['colors'] }> = ({
  onPress,
  title,
  disabled = false,
  size = 'medium',
  fullWidth = false,
  icon,
  color: colorProp,
  loading = false,
  backgroundColor: backgroundColorProp,
  ...props
}) => {
  const { variant, height, width, paddingHorizontal } = useStyles(size, fullWidth);

  const color = colorProp !== undefined ? colorProp : 'white';
  const backgroundColor = backgroundColorProp !== undefined ? backgroundColorProp : 'primary';

  return (
    <BaseButton
      paddingHorizontal={ paddingHorizontal }
      borderRadius={ 24 }
      alignItems='center'
      justifyContent='center'
      height={ height }
      backgroundColor={ disabled || loading ? 'bgDisable' : backgroundColor }
      width={ width }
      flex={ fullWidth ? 1 : undefined }
      onPress={ onPress }
      disabled={ loading || disabled }
      { ...props }>
      { icon !== undefined && (
        <BaseIcon icon={ icon } size={ 16 } mr='s' color={ disabled ? 'textInactive' : color } />
      ) }
      <HorizontalView alignItems={ 'center' }>
        <Loading color={ 'white' } animating={ loading } size={ 'small' } />
        <Text variant={ variant } color={ disabled ? 'textInactive' : color }>
          { title }
        </Text>
      </HorizontalView>
    </BaseButton>
  );
};

export const SecondaryButton: FC<ButtonProps> = ({
  onPress,
  title,
  disabled = false,
  size = 'medium',
  fullWidth = false,
  icon,
  color: colorProp,
  ...props
}) => {
  const { variant, height, width, paddingHorizontal } = useStyles(size, fullWidth);

  const color = colorProp !== undefined ? colorProp : 'textPrimary';

  return (
    <BaseButton
      paddingHorizontal={ paddingHorizontal }
      borderRadius={ 24 }
      borderWidth={ 1 }
      alignItems='center'
      justifyContent='center'
      borderColor='border'
      height={ height }
      width={ width }
      flexDirection='row'
      backgroundColor={ disabled ? 'bgDisable' : 'white' }
      onPress={ onPress }
      disabled={ disabled }
      { ...props }>
      { icon !== undefined && (
        <BaseIcon icon={ icon } size={ 16 } mr='s' color={ disabled ? 'textInactive' : color } />
      ) }
      <Text variant={ variant } color={ disabled ? 'textInactive' : color }>
        { title }
      </Text>
    </BaseButton>
  );
};

export type TextButton = Omit<BaseButtonProps, 'children'> & {
  onPress?: () => void;
  title: string;
  disabled?: boolean;
  size?: ButtonSize;
  style?: StyleProp<ViewStyle>;
  icon?: React.FC<{ width?: number; height?: number }>;
  color?: keyof Theme['colors'];
};

export const TextButton: FC<TextButton> = ({
  title,
  onPress,
  disabled = false,
  size = 'medium',
  icon,
  style,
  color = 'primary',
  ...props
}) => {
  const { variant } = useStyles(size, false);

  return (
    <BaseButton onPress={ onPress } flexDirection='row' style={ style } alignItems={ 'center' } { ...props }>
      { icon !== undefined && <BaseIcon icon={ icon } size={ 16 } mr='xs' color={ color } /> }
      <Text variant={ variant } color={ disabled ? 'bgDisable' : color }>
        { title }
      </Text>
    </BaseButton>
  );
};

function useStyles(size: ButtonSize, fullWidth: boolean) {
  const { colors } = useTheme<Theme>();

  function getSize(): number {
    switch (size) {
    case 'large':
      return 48;
    case 'medium':
      return 38;
    case 'small':
      return 30;
    default:
      return 38;
    }
  }

  function getVariant(): ReturnType<typeof useTheme> {
    switch (size) {
    case 'large':
      return 'subtitle2';
    case 'medium':
      return 'subtitle2';
    case 'small':
      return 'subtitle3';
    default:
      return 'subtitle2';
    }
  }

  function getPaddingHorizontal(): keyof Theme['spacing'] {
    switch (size) {
    case 'large':
      return 'm';
    case 'medium':
      return 'm';
    case 'small':
      return 'm';
    default:
      return 'm';
    }
  }

  return {
    colors,
    variant: getVariant(),
    height: getSize(),
    width: fullWidth ? '100%' : undefined,
    minWidth: 60,
    paddingHorizontal: getPaddingHorizontal(),
  };
}
