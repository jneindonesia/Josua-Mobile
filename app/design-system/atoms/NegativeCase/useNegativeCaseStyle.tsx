import { StyleSheet } from 'react-native';
import { useTheme } from '@shopify/restyle';
import { Theme } from 'app/styles/theme';

export function useNegativeCaseStyle() {
  const { colors, textVariants, spacing } = useTheme<Theme>();

  const styles = StyleSheet.create({
    container: {
      paddingHorizontal: 16
    },
    image: {
      width: 264,
      height: 220,
      alignSelf: 'center',
      resizeMode: 'contain'
    },
    title: {
      ...textVariants.subtitle2,
      color: colors.textMidnight,
      textAlign: 'center',
      marginTop: spacing.m,
      marginBottom: spacing.xs
    },
    message: {
      ...textVariants.body3,
      color: colors.textMidnight,
      textAlign: 'center',
      marginBottom: spacing.xl
    },
    primaryBtn: {
      paddingHorizontal: spacing.m,
      backgroundColor: colors.primary,
      height: 38,
      width: 260,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 24,
      marginBottom: spacing.s
    },
    secondaryBtn: {
      paddingHorizontal: spacing.m,
      backgroundColor: colors.white,
      borderWidth: 1,
      borderColor: colors.border,
      height: 38,
      width: 260,
      alignItems: 'center',
      justifyContent: 'center',
      alignSelf: 'center',
      borderRadius: 24,
      marginBottom: spacing.s
    }
  });

  return {
    styles
  };
}
