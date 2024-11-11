import { StyleSheet, Platform } from 'react-native';
import {
  COLOR_BACKGROUND_INACTIVE,
  COLOR_EVENT_INACTIVE,
  COLOR_EVENT_INACTIVE_OPACITY70,
  COLOR_FONT_PRIMARY_DARK,
  COLOR_WHITE,
  FONT_BODY1_PRIMARY,
  FONT_BODY2_PRIMARY,
  FONT_BODY2_PRIMARY_MEDIUM,
} from './index';

const UbuntuRegular = Platform.OS === 'android' ? 'Ubuntu-Regular' : 'Ubuntu';
const UbuntuMedium = 'Ubuntu-Medium';

const styles = StyleSheet.create({
  subtitle: {
    color: COLOR_FONT_PRIMARY_DARK,
    lineHeight: 21,
    fontFamily: UbuntuMedium,
    fontSize: 16,
  },
  subtitle2: {
    color: COLOR_FONT_PRIMARY_DARK,
    lineHeight: 21,
    fontFamily: UbuntuMedium,
    fontSize: 14,
  },
  subtitle3: {
    color: COLOR_FONT_PRIMARY_DARK,
    lineHeight: 21,
    fontFamily: UbuntuMedium,
    fontSize: 12,
  },
  body: {},
  body2: {
    color: COLOR_FONT_PRIMARY_DARK,
    lineHeight: 21,
    fontFamily: UbuntuRegular,
    fontSize: 14,
  },
  body3: {
    color: COLOR_FONT_PRIMARY_DARK,
    lineHeight: 18,
    fontFamily: UbuntuRegular,
    fontSize: 12,
  },
  body4: {
    color: COLOR_FONT_PRIMARY_DARK,
    lineHeight: 15,
    fontFamily: UbuntuRegular,
    fontSize: 10,
  },
  textValuePicker: {
    ...FONT_BODY1_PRIMARY,
    color: COLOR_FONT_PRIMARY_DARK,
    lineHeight: 24,
    marginRight: 8,
  },
  textPlaceholder: {
    ...FONT_BODY2_PRIMARY,
    color: COLOR_EVENT_INACTIVE,
  },
  placeholder: {
    ...FONT_BODY1_PRIMARY,
    lineHeight: 24,
    color: COLOR_BACKGROUND_INACTIVE,
    marginRight: 8,
  },
  fiscalPlaceholder: {
    ...FONT_BODY1_PRIMARY,
    lineHeight: 24,
    color: COLOR_EVENT_INACTIVE_OPACITY70,
    marginRight: 8,
  },
  textLabel: {
    ...FONT_BODY2_PRIMARY_MEDIUM,
    color: COLOR_FONT_PRIMARY_DARK,
    marginBottom: 7,
  },
  fieldPeriod: {
    width: '100%',
    height: 50,
    alignItems: 'center',
    backgroundColor: COLOR_WHITE,
    flexDirection: 'row',
    justifyContent: 'space-between',
    borderRadius: 5,
    borderWidth: 0.5,
    borderColor: COLOR_BACKGROUND_INACTIVE,
    paddingHorizontal: 10,
  },
});

export default styles;
