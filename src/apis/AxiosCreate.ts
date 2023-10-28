import axios, { AxiosRequestConfig } from "axios";
import { CustomAxiosInterface, CommonResponse } from "AxiosCommon";

const apiClient: CustomAxiosInterface = axios.create({
  headers: {
    "Content-Type": "application/json",
  },
  baseURL: `${process.env.NEXT_PUBLIC_BASE_URL}`,
});

const Get = async <T>(url: string, config?: AxiosRequestConfig): Promise<T> => {
  const response = await apiClient.get<CommonResponse<T>>(url, config);
  return response.data.data;
};

const Post = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.post<CommonResponse<T>>(url, data, config);
  return response.data.data;
};

const Put = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.put<CommonResponse<T>>(url, data, config);
  return response.data.data;
};

const Patch = async <T>(
  url: string,
  data?: any,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.patch<CommonResponse<T>>(url, data, config);
  return response.data.data;
};

const Delete = async <T>(
  url: string,
  config?: AxiosRequestConfig
): Promise<T> => {
  const response = await apiClient.delete<CommonResponse<T>>(url, config);
  return response.data.data;
};

export {
  Get as get,
  Post as post,
  Put as put,
  Patch as patch,
  Delete as remove,
};
