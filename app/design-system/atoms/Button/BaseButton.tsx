import React from 'react';
import { TouchableOpacityProps, TouchableOpacity } from 'react-native';
import { Theme } from 'app/styles/theme';
import { createBox } from '@shopify/restyle';

export const BaseButton = createBox<
  Theme,
  TouchableOpacityProps & {
    children: React.ReactNode;
  }
>(TouchableOpacity);

export type BaseButtonProps = React.ComponentProps<typeof BaseButton>;
