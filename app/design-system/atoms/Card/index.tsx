import React from 'react';
import { Theme } from 'app/styles/theme';
import {
  createRestyleComponent,
  createVariant,
  spacing,
  SpacingProps,
  VariantProps,
  createBox,
  useRestyle,
} from '@shopify/restyle';
import { BaseButton, BaseButtonProps } from '../Button';

const Box = createBox<Theme>();

export type BaseCardProps = SpacingProps<Theme> &
  VariantProps<Theme, 'cardVariants'> &
  React.ComponentProps<typeof Box>;

export const BaseCard = createRestyleComponent<BaseCardProps, Theme>(
  [spacing, createVariant({ themeKey: 'cardVariants' })],
  Box
);

type CardProps = BaseButtonProps &
  VariantProps<Theme, 'cardVariants'> & {
    children: React.ReactNode;
  };

const variantCard = createVariant({ themeKey: 'cardVariants' });

export const Card = (props: CardProps) => {
  const { onPress, children, ...rest } = props;
  const restyleProps: any = useRestyle([spacing, variantCard], rest);
  return (
    <BaseButton disabled={ typeof onPress !== 'function' } onPress={ onPress } { ...restyleProps }>
      { children }
    </BaseButton>
  );
};
