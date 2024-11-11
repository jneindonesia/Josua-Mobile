export function isNotEmptyObject<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null && typeof value === 'object' && Object.keys(value).length > 0;
}
