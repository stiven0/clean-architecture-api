import axios, { AxiosInstance } from "axios";

export const httpClient = (baseURL?: string): AxiosInstance => {
  const instance = axios.create({
    baseURL: baseURL ?? "https://api.escuelajs.co/api/v1",
    timeout: 5000
  });
  // interceptores que podrías usar: logging, retries básicos, etc.
  return instance;
};
