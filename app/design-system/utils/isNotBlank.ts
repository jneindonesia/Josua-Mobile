export function isNotBlank<T>(value: T | undefined | null): value is T {
  return value !== undefined && value !== null && typeof value === 'string' && value.length > 0;
}
