import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const ROOT_URL = "http://localhost:9090";
export const REQUEST_TIMEOUT = 5000; // ms

export const createBackendAxiosRequest = async <D>(
  config: AxiosRequestConfig,
): Promise<AxiosResponse<D>> => axios({
  baseURL: `${ROOT_URL}/`,
  timeout: REQUEST_TIMEOUT,
  ...config,
});