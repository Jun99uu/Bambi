declare module "AxiosCommon" {
  import {
    AxiosInstance,
    AxiosInterceptorManager,
    AxiosRequestConfig,
    AxiosResponse,
  } from "axios";

  type CustomAxiosResponse<T = any> = {
    response?: T;
    refreshToken?: string;
  };

  export interface CustomAxiosInterface extends AxiosInstance {
    interceptors: {
      request: AxiosInterceptorManager<AxiosRequestConfig>;
      response: AxiosInterceptorManager<AxiosResponse<CustomAxiosResponse>>;
    };

    get<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    delete<T>(url: string, config?: AxiosRequestConfig): Promise<T>;
    post<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    put<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
    patch<T>(url: string, data?: any, config?: AxiosRequestConfig): Promise<T>;
  }

  export interface CommonRequest {
    status: number;
    message: string;
    success?: boolean;
    data?: any;
  }
  interface APIDataResponse<T> {
    data: T;
  }
  export interface CommonResponse<T> {
    data: APIDataResponse<T>;
    status: number;
    statusText: string;
  }
}
