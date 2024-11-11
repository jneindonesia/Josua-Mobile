/* eslint-disable no-useless-escape */
import { fontFaceUbuntuReguler as fontFaceReguler } from './fontFaceUbuntuReguler';
import { fontFaceUbuntuMedium as fontFaceMedium } from './fontFaceUbuntuMedium';

export const fontFaceUbuntuReguler = fontFaceReguler;
export const fontFaceUbuntuMedium = fontFaceMedium;

export const css = `<head><style type=\"text/css\">${fontFaceUbuntuReguler}${fontFaceUbuntuMedium}</style></head>`;
