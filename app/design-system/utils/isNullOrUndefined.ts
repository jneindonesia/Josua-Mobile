export default (val: unknown): val is null | undefined => val === undefined || val === null;
