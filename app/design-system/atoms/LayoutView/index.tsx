import React from 'react';
import { Theme } from 'app/styles/theme';
import { createBox } from '@shopify/restyle';

const Box = createBox<Theme>();

export const HorizontalView = (props: React.ComponentProps<typeof Box>) => {
  return <Box flexDirection='row' { ...props } />;
};

export const VerticalView = Box;

export type VerticalViewProps = React.ComponentProps<typeof VerticalView>;

export type HorizontalViewProps = React.ComponentProps<typeof HorizontalView>;

export const HorizontalSpaceBetween = (props: React.ComponentProps<typeof Box>) => {
  return <Box flexDirection='row' justifyContent='space-between' { ...props } />;
};
