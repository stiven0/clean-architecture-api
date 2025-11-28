import axios, { AxiosInstance } from "axios";
import { CONFIG_ENVIRONMENT } from '../../config';

export const httpClient = (baseURL?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL ?? CONFIG_ENVIRONMENT.API_URL,
    timeout: 5000
  });
  // interceptores que podrías usar: logging, retries básicos, etc.
  return instance;
};
