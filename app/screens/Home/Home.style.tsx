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
    containerModal: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      position: 'absolute',
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,
    },
  });

  return {
    Styles,
  };
}
