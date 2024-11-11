import { REGEX } from 'app/constants';

export const numberWithDot = (num: string) => num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');

export const getNumberOnly = (string = '') => string.replace(/[^\d]+/g, '');

export const isNoAlphabet = (str: string) => {
  if (!REGEX.alphabet.test(str)) {
    return true;
  }
};
  
export function isEmpty(value: string) {
  return value === null || value === undefined || (typeof value === 'string' && value.trim() === '');
}

export const noop = () => {};


export const isArrayHasData = <T>(data: T[]): boolean => {
  if (Array.isArray(data) && data.length > 0) {
    return true;
  }
  return false;
};
