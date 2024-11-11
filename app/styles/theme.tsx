import { Platform } from 'react-native';
import { createTheme } from '@shopify/restyle';

const UbuntuRegular = Platform.OS === 'android' ? 'Ubuntu-Regular' : 'Ubuntu';
const UbuntuMedium = 'Ubuntu-Medium';
const UbuntuBold = 'Ubuntu-Bold';

const palette = {
  primary: '#14539a',
  primaryDark: '#B63792',
  primaryLight: '#DDA1C34D', // 4D opacity 30%
  primaryLighter: '#FAEFF5',

  greyLight: '#FCFBF9',
  grey: '#F5F7FA',
  greyDark: '#bdbdbd',

  black: '#0B0B0B',
  black0_5: 'rgba(0,0,0,0.5)',
  white: '#FFFFFF', // '#F5F7FA',

  eventSuccess: '#25974C',
  eventSuccessLight: '#BADCC6', // success 20
  eventSuccessLighter: '#E5F0E9', // success 10

  eventError: '#C72037',
  eventErrorLight: '#FFD1CE', // error 20
  eventErrorLighter: '#FFD1CE', // error 10

  eventWarning: '#f8e71c',
  eventWarningLighter: '#FBF5E1', // warning 10

  eventInactive: '#DEE3ED',
  eventInformation: '#69A9FD',

  textMidnight: '#2E434D',
  textLight: '#8D98AA',
  textInactive: '#808C92',

  transparent: 'transparent',

  mainBackground: '#FDFDFD',
};

const theme = createTheme({
  colors: {
    mainBackground: palette.mainBackground, // need refactor to prefix bg
    bgSurface: palette.grey,
    bgDisable: '#CAD2E2',

    primary: palette.primary,
    primaryDark: palette.primaryDark,
    primaryLight: palette.primaryLight,
    primaryLighter: palette.primaryLighter,

    grey: palette.grey,
    greyDark: palette.greyDark,
    greyLight: palette.greyLight,

    textMidnight: palette.textMidnight,
    textLight: palette.textLight,
    textPrimary: palette.primary,
    textError: palette.eventError,
    textInactive: palette.textInactive,

    white: palette.white,
    black: palette.black,
    black0_5: palette.black0_5,

    eventSuccess: palette.eventSuccess,
    eventSuccessLight: palette.eventSuccessLight,
    eventSuccessLighter: palette.eventSuccessLighter,

    eventError: palette.eventError,
    eventErrorLight: palette.eventErrorLight,
    eventErrorLighter: palette.eventErrorLighter,

    eventInactive: palette.eventInactive,
    eventWarning: palette.eventWarning,
    eventWarningLighter: palette.eventWarningLighter,

    transparent: palette.transparent,

    border: '#CAD2E2',
  },
  textVariants: {
    h1: {
      color: 'textMidnight',
      lineHeight: 36,
      fontFamily: UbuntuBold,
      fontSize: 24,
      fontWeight: 'bold',
    },
    h2: {
      color: 'textMidnight',
      lineHeight: 30,
      fontFamily: UbuntuBold,
      fontSize: 20,
      fontWeight: 'bold',
    },
    h3: {
      color: 'textMidnight',
      lineHeight: 24,
      fontFamily: UbuntuBold,
      fontSize: 16,
      fontWeight: 'bold',
    },
    subtitle: {
      color: 'textMidnight',
      lineHeight: 21,
      fontFamily: UbuntuMedium,
      fontSize: 16,
    },
    subtitle2: {
      color: 'textMidnight',
      lineHeight: 21,
      fontFamily: UbuntuMedium,
      fontSize: 14,
    },
    subtitle3: {
      color: 'textMidnight',
      lineHeight: 21,
      fontFamily: UbuntuMedium,
      fontSize: 12,
    },
    subtitle4: {
      color: 'textMidnight',
      lineHeight: 14,
      fontFamily: UbuntuMedium,
      fontSize: 10,
    },
    body: {
      color: 'textMidnight',
      lineHeight: 21,
      fontFamily: UbuntuRegular,
      fontSize: 16,
    },
    body2: {
      color: 'textMidnight',
      lineHeight: 21,
      fontFamily: UbuntuRegular,
      fontSize: 14,
    },
    body3: {
      color: 'textMidnight',
      lineHeight: 18,
      fontFamily: UbuntuRegular,
      fontSize: 12,
    },
    body4: {
      color: 'textMidnight',
      lineHeight: 14,
      fontFamily: UbuntuRegular,
      fontSize: 10,
    },
  },
  spacing: {
    xxs: 2,
    xs: 4,
    s: 8,
    xM: 12,
    m: 16,
    l: 24,
    xl: 32,
    xxl: 48,
  },
  breakpoints: {
    phone: 0,
    tablet: 768,
  },
  cardVariants: {
    defaults: {
      // We can define defaults for the variant here.
      // This will be applied after the defaults passed to createVariant and before the variant defined below.
    },
    regular: {
      // We can refer to other values in the theme here, and use responsive props
      borderRadius: 5,
      backgroundColor: 'white',
      paddingHorizontal: 'm',
      paddingVertical: 'xM',
    },
    elevated: {
      padding: {
        phone: 's',
        tablet: 'm',
      },
      shadowColor: 'black',
      shadowOpacity: 0.2,
      shadowOffset: { width: 0, height: 5 },
      shadowRadius: 15,
      elevation: 5,
    },
    border: {
      borderRadius: 5,
      backgroundColor: 'white',
      paddingHorizontal: 'xM',
      paddingVertical: 'xM',
      borderWidth: 1,
      borderColor: 'border',
    },
  },
});

export type Theme = typeof theme;
export default theme;
