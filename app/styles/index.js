/**
 * @providesModule config-styles
 */

import { Platform } from 'react-native';

export const COLOR_BASE_PRIMARY_DARK = '#B63792';
export const COLOR_BASE_PRIMARY_MAIN = '#B31E72';
export const COLOR_BASE_PRIMARY_MAIN_LIGHT = '#DDA1C3';
export const COLOR_BASE_PRIMARY_LIGHT = 'rgba(179, 30, 114, 0.07)';
export const COLOR_BASE_PRIMARY_MAIN_OPACITY50 = 'rgba(178,30,114, 0.3)';

// export const COLOR_BASE_SECONDARY_DARK = '#ba000d';
export const COLOR_BASE_SECONDARY_MAIN = '#FCD41C';
export const COLOR_BASE_SECONDARY_LIGHT = '#D6D6D6';

export const COLOR_FONT_PRIMARY_DARK = '#2E434D';
export const COLOR_FONT_PRIMARY_LIGHT = '#8D98AA';
export const COLOR_FONT_INACTIVE = '#808C92';

export const COLOR_EVENT_SUCCESS = '#25974C';
export const COLOR_EVENT_ERROR = '#C72037';
export const COLOR_EVENT_INACTIVE = '#8D98AA';
export const COLOR_EVENT_INACTIVE_OPACITY70 = 'rgba(141, 152, 170, 0.7)';
export const COLOR_EVENT_INFORMATION = '#69A9FD';
export const COLOR_EVENT_WARNING = '#f8e71c';

export const COLOR_BACKGROUND_INACTIVE = '#DEE3ED';
export const COLOR_BACKGROUND_ICON = '#FAEFF5';
export const COLOR_BACKGROUND_INFORMATION = '#F1F3F7';
export const COLOR_DARK_DELIMETER = '#CAD2E2';
export const COLOR_BACKGROUND_SCREEN = '#F2F2F2';

export const COLOR_WHITE = '#ffffff';
export const COLOR_GREY = '#bdbdbd';
export const COLOR_GREY_LIGHT = '#F5F7FA';
export const COLOR_LIGTER_GREY = '#FCFBF9';
export const COLOR_WHITE_OPACITY50 = 'rgba(255,255,255,0.5)';
export const COLOR_BLACK = '#000000';
export const COLOR_BLACK_OPACITY50 = 'rgba(0,0,0,0.5)';
export const COLOR_DARK_CHARCOAL = '#333333';
export const COLOR_TRANSPARENT = 'rgba(52, 52, 52, 0.8)';
export const COLOR_REAL_TRANSPARENT = 'transparent';

export const COLOR_LIGHT_ORANGE = '#FFF2B8';
export const COLOR_PALE_ORANGE = '#f7a859';
export const COLOR_DARK_TURQUOISE = '#074c51';
export const COLOR_PLANTATION = '#28444E';
export const COLOR_LIGRER_BLUE = '#D4D2FF';
export const COLOR_DUSK_BLUE = '#293780';
export const LIGHT_BLUE = '#F1F3F7';
export const COLOR_GREEN_VIRIDIAN = '#25974c';
export const COLOR_PURPLE_10 = '#C14A8D';
export const COLOR_YELLOW_20 = '#FFAD00';
export const COLOR_BLUE_10 = '#535E98';
export const COLOR_GREEN = '#25974C';
export const COLOR_PINK = '#f79ed0';

export const COLOR_ICON_DARK = '#2e434d';

const FONT_PRIMARY_REGULAR = Platform.OS === 'android' ? 'Ubuntu-Regular' : 'Ubuntu';
const FONT_PRIMARY_MEDIUM = 'Ubuntu-Medium';
const FONT_PRIMARY_LIGHT = 'Ubuntu-Light';
const FONT_PRIMARY_BOLD = 'Ubuntu-Bold';

const FONT_SIZE_HEADLINE1 = 96;
const FONT_SIZE_HEADLINE2 = 60;
const FONT_SIZE_HEADLINE3 = 48;
const FONT_SIZE_HEADLINE4 = 34;
const FONT_SIZE_HEADLINE5 = 24;
const FONT_SIZE_HEADLINE6 = 20;
const FONT_SIZE_SUBTITLE1 = 16;
const FONT_SIZE_SUBTITLE2 = 14;
const FONT_SIZE_BODY1 = 16;
const FONT_SIZE_BODY2 = 14;
const FONT_SIZE_BUTTON = 14;
const FONT_SIZE_CAPTION = 12;
const FONT_SIZE_OVERLINE = 10;

export const FONT_HEADLINE1_PRIMARY = {
  fontFamily: FONT_PRIMARY_LIGHT,
  fontSize: FONT_SIZE_HEADLINE1,
};

export const FONT_HEADLINE2_PRIMARY = {
  fontFamily: FONT_PRIMARY_LIGHT,
  fontSize: FONT_SIZE_HEADLINE2,
};

export const FONT_HEADLINE3_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_HEADLINE3,
};

export const FONT_HEADLINE4_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_HEADLINE4,
};

export const FONT_HEADLINE5_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_HEADLINE5,
};

export const FONT_HEADLINE5_PRIMARY_MEDIUM = {
  fontFamily: FONT_PRIMARY_MEDIUM,
  fontSize: FONT_SIZE_HEADLINE5,
};

export const FONT_HEADLINE6_PRIMARY = {
  fontFamily: FONT_PRIMARY_MEDIUM,
  fontSize: FONT_SIZE_HEADLINE6,
};

export const FONT_HEADLINE6_PRIMARY_BOLD = {
  fontFamily: FONT_PRIMARY_BOLD,
  fontSize: FONT_SIZE_HEADLINE6,
};

export const FONT_SUBTITLE1_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_SUBTITLE1,
};

export const FONT_SUBTITLE1_PRIMARY_BOLD = {
  fontFamily: FONT_PRIMARY_BOLD,
  fontSize: FONT_SIZE_SUBTITLE1,
};

export const FONT_SUBTITLE1_PRIMARY_MEDIUM = {
  fontFamily: FONT_PRIMARY_MEDIUM,
  fontSize: FONT_SIZE_SUBTITLE1,
};

export const FONT_SUBTITLE2_PRIMARY = {
  fontFamily: FONT_PRIMARY_MEDIUM,
  fontSize: FONT_SIZE_SUBTITLE2,
};

export const FONT_SUBTITLE2_PRIMARY_BOLD = {
  fontFamily: FONT_PRIMARY_BOLD,
  fontSize: FONT_SIZE_SUBTITLE2,
};

export const FONT_SUBTITLE2_PRIMARY_REGULAR = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_SUBTITLE2,
};

export const FONT_BODY1_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_BODY1,
};

export const FONT_BODY1_MEDIUM = {
  fontFamily: FONT_PRIMARY_MEDIUM,
  fontSize: FONT_SIZE_BODY1,
};

export const FONT_BODY1_PRIMARY_MEDIUM = {
  fontFamily: FONT_PRIMARY_MEDIUM,
  fontSize: FONT_SIZE_BODY1,
};

export const FONT_BODY2_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_BODY2,
};

export const FONT_BODY2_PRIMARY_BOLD = {
  fontFamily: FONT_PRIMARY_BOLD,
  fontSize: FONT_SIZE_BODY2,
};

export const FONT_BODY2_PRIMARY_MEDIUM = {
  fontFamily: FONT_PRIMARY_MEDIUM,
  fontSize: FONT_SIZE_BODY2,
};

export const FONT_BUTTON_PRIMARY = {
  fontFamily: FONT_PRIMARY_MEDIUM,
  fontSize: FONT_SIZE_BUTTON,
};

export const FONT_CAPTION_PRIMARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_CAPTION,
};

export const FONT_CAPTION_PRIMARY_MEDIUM = {
  fontFamily: FONT_PRIMARY_MEDIUM,
  fontSize: FONT_SIZE_CAPTION,
};

export const FONT_CAPTION_PRIMARY_BOLD = {
  fontFamily: FONT_PRIMARY_BOLD,
  fontSize: FONT_SIZE_CAPTION,
};

export const FONT_OVERLINE_PRIMARY = {
  fontFamily: FONT_PRIMARY_LIGHT,
  fontSize: FONT_SIZE_OVERLINE,
};

export const FONT_OVERLINE_PRIMARY_MEDIUM = {
  fontFamily: FONT_PRIMARY_MEDIUM,
  fontSize: FONT_SIZE_OVERLINE,
};

export const FONT_OVERLINE_SECONDARY = {
  fontFamily: FONT_PRIMARY_REGULAR,
  fontSize: FONT_SIZE_OVERLINE,
};

export const FONT_OVERLINE_SECONDARY_BOLD = {
  fontFamily: FONT_PRIMARY_BOLD,
  fontSize: FONT_SIZE_OVERLINE,
};

export const WORD = {
  center: 'center',
  row: 'row',
  spaceBetween: 'space-between',
  flexStart: 'flex-start',
};

export const WebViewStyle = `
* {
  font-family: 'Ubuntu-Regular';
  font-size: 12px;
  color: ${COLOR_FONT_PRIMARY_DARK}
}
p {
  font-size: 12px;
  color: ${COLOR_FONT_PRIMARY_DARK}
}
`;
