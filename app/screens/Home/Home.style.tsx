import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'app/styles/theme';

export function useStyles() {
  const { colors } = useTheme<Theme>();

  const Styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: colors.bgSurface,
    },
  });

  return {
    Styles,
  };
}
