export const getValueInObject = (from: Record<string, any>, selector: string) =>
  selector
    .replace(/\[([^\[\]]*)\]/g, '.$1.')
    .split('.')
    .filter(t => t !== '')
    .reduce((prev, cur) => prev && prev[cur], from);
