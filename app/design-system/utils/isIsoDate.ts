import { isNotBlank } from './isNotBlank';

export function isIsoDate(value: unknown): boolean {
  if (isNotBlank(value)) {
    const date = new Date(value as string);
    return date.toISOString() === value;
  } else {
    return false;
  }
}
