export interface IOption<T = any> {
  label: string;
  value: T;
  other?: boolean;
}

export interface IMapOption {
  label: string;
  value: string;
}
