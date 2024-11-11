export class LoadMoreError extends Error {
  constructor(message: string = 'load more error') {
    super(message);
  }
}
