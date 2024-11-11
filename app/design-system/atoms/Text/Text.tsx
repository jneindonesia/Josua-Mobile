import React from 'react';
import { createText, layout, LayoutProps, useRestyle } from '@shopify/restyle';
import { Theme } from 'app/styles/theme';

export const BaseText = createText<Theme>();

export type TextProps = React.ComponentProps<typeof BaseText> & LayoutProps<Theme>;

const EXCLUDE_VARIANT = ['subtitle1', 'h5', 'h4'];

function mapVariant(variant?: string): keyof Theme['textVariants'] {
  const result = variant !== undefined && EXCLUDE_VARIANT.includes(variant) ? 'subtitle' : variant;
  return result as keyof Theme['textVariants'];
}

export const Text = (props: TextProps) => {
  const variant = mapVariant(props.variant as string);
  const propsRestyle = useRestyle([layout], { ...props, variant });
  return <BaseText { ...propsRestyle } />;
};
