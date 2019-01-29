import axios, { AxiosInstance, AxiosPromise } from 'axios';

const axiosInstance: AxiosInstance = axios.create({
  baseURL: 'www.abc.com/api'
});

axiosInstance.interceptors.request.use(
  (config) => {
    // Do something before request is sent
    return config;
  }, (error) => {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => {
    // Do something with response data
    return response;
  },
  (error) => {
    // Do something with response error
    return Promise.reject(error);
  }
);

class HttpRequest {
  public axios: AxiosInstance;
  constructor() {
    this.axios = axiosInstance;
  }

  public setHeader(header: any) {
    this.axios.defaults.headers.common[header.key] = header.value;
    this.axios.defaults.headers.post['Content-Type'] =
      'application/x-www-form-urlencoded';
  }

  public fetch<T = any>(methodName: string, data: any): AxiosPromise<T> {
    return this.axios.get(methodName, {
      params: data
    });
  }

  public create<T = any>(methodName: string, data: any): AxiosPromise<T> {
    return this.axios.post(methodName, data);
  }

  public update<T = any>(methodName: string, data: any): AxiosPromise<T> {
    return this.axios.put(methodName, data);
  }

  public patch<T = any>(methodName: string, data: any): AxiosPromise<T> {
    return this.axios.patch(methodName, data);
  }

  public delete(methodName: string, id: number): AxiosPromise {
    return this.axios.delete(methodName, { params: { id: id } });
  }

  public request<T = any>(type: string, url: string, data: any): AxiosPromise<T> {
    let promise: AxiosPromise<T>;
    switch (type) {
      case 'GET':
        promise = axios.get(url, { params: data });
        break;
      case 'POST':
        promise = axios.post(url, data);
        break;
      case 'PUT':
        promise = axios.put(url, data);
        break;
      case 'PATCH':
        promise = axios.patch(url, data);
        break;
      case 'DELETE':
        promise = axios.delete(url, data);
        break;
      default:
        promise = axios.get(url, { params: data });
        break;
    }
    return promise;
  }
}

export default HttpRequest;
