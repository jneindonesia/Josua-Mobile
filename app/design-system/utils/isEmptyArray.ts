export function isEmptyArray<T>(value: T | undefined | null): boolean {
  return (value === undefined && value === null) || (Array.isArray(value) && value.length === 0);
}
