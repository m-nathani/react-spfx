import axios, { AxiosInstance, AxiosPromise, AxiosRequestConfig, AxiosResponse } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'www.abc.com/api',
});

axiosInstance.interceptors.request.use(
  (config: AxiosRequestConfig): AxiosRequestConfig | Promise<AxiosRequestConfig> => {
    // Do something before request is sent
    return config;
  },
  error => {
    // Do something with request error
    return Promise.reject(error);
  },
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response: AxiosResponse): AxiosResponse | Promise<AxiosResponse> => {
    // Do something with response data
    return response;
  },
  error => {
    // Do something with response error
    return Promise.reject(error);
  },
);

class HttpRequest {
  public axios: AxiosInstance;
  constructor() {
    this.axios = axiosInstance;
  }

  public fetch<T = any>(url: string, params: object, config: AxiosRequestConfig = {}): AxiosPromise<T> {
    return this.axios.get(url, {
      params,
      ...config,
    });
  }

  public create<T = any>(url: string, data: object, config: AxiosRequestConfig = {}): AxiosPromise<T> {
    return this.axios.post(url, data, {
      ...config,
    });
  }

  public update<T = any>(url: string, data: object, config: AxiosRequestConfig = {}): AxiosPromise<T> {
    return this.axios.put(url, data, {
      ...config,
    });
  }

  public patch<T = any>(url: string, data: object, config: AxiosRequestConfig = {}): AxiosPromise<T> {
    return this.axios.patch(url, data, {
      ...config,
    });
  }

  public remove(url: string, params: object, config: AxiosRequestConfig = {}): AxiosPromise {
    return this.axios.delete(url, {
      params,
      ...config,
    });
  }
}

export default HttpRequest;
