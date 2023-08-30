export interface IBaseResponse {
  success: boolean;
  message: string;
}

export interface IResponse<T> extends IBaseResponse {
  result: T | null;
}