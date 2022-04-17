import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const ROOT_URL = "";
export const REQUEST_TIMEOUT = 5; // s

export const createBackendAxiosRequest = async <D>(
  config: AxiosRequestConfig,
): Promise<AxiosResponse<D>> => axios({
  baseURL: `${ROOT_URL}/`,
  timeout: REQUEST_TIMEOUT,
  ...config,
});