import React from 'react';
import { Theme } from 'app/styles/theme';
import { createBox, useTheme } from '@shopify/restyle';

const Box = createBox<Theme>();

type BaseIconProps = React.ComponentProps<typeof Box> & {
  size?: number;
  icon: React.FC<{ width?: number; height?: number; color?: string }>;
  color?: string | keyof Theme['colors'];
};

export const BaseIcon = ({ icon: Icon, size = 24, color, ...props }: BaseIconProps) => {
  const { colors } = useStyles();

  function getColorHex(): any {
    if (color === undefined) { return undefined; }
    if (colors?.[`${color as keyof Theme['colors']}`]) {
      return colors?.[`${color as keyof Theme['colors']}`];
    }
    return color;
  }
  return (
    <Box alignItems={ 'center' } justifyContent='center' { ...props }>
      <Icon width={ size } height={ size } color={ getColorHex() } />
    </Box>
  );
};

function useStyles() {
  const { colors } = useTheme<Theme>();
  return { colors };
}
