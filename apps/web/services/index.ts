import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';

export const ROOT_URL = process.env.SERVER_LOCAL === "true"
  ? "http://localhost:9090"
  : "https://server-iq3ytz6tjq-uc.a.run.app";

// export const ROOT_URL = "http://localhost:9090";

console.log(ROOT_URL);

export const REQUEST_TIMEOUT = 5000; // ms

export const createBackendAxiosRequest = async <D>(
  config: AxiosRequestConfig,
): Promise<AxiosResponse<D>> => axios({
  baseURL: `${ROOT_URL}/`,
  timeout: REQUEST_TIMEOUT,
  ...config,
});