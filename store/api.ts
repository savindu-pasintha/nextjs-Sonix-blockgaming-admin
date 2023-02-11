import axios, {AxiosResponse} from 'axios';
import {cleanStore, getCurrentBrand, getJWT, hmac, redirectLogin} from '../utils/functions';
const apiUrl = process.env.NEXT_PUBLIC_API_URL;
const SECURED_METHODS = ['POST', 'PUT', 'DELETE', 'PATCH'];
interface RequestInterface {
  url: string;
  body?: any;
  token?: string;
  actions?: any;
  headers?: any;
}

export async function get(args: RequestInterface): Promise<AxiosResponse> {
  try {
    return await axios({
      url: `${apiUrl}${args.url}`,
      params: args.body ?? {},
      method: 'GET',
      headers: args.headers ?? {},
    });
  } catch (error: any) {
    return error.request;
  }
}

export async function post(args: RequestInterface): Promise<AxiosResponse> {
  try {
    return axios({
      url: `${apiUrl}${args.url}`,
      method: 'POST',
      data: args.body,
      headers: args.headers ?? {},
    });
  } catch (error: any) {
    return error.response;
  }
}

export async function put(args: RequestInterface): Promise<AxiosResponse> {
  try {
    return await axios({
      url: `${apiUrl}${args.url}`,
      method: 'PUT',
      data: args.body,
      headers: args.headers ?? {},
    });
  } catch (error: any) {
    return error.response;
  }
}

export async function _delete(args: RequestInterface): Promise<AxiosResponse> {
  try {
    return await axios({
      url: `${apiUrl}${args.url}`,
      method: 'DELETE',
      data: args.body,
      headers: args.headers ?? {},
    });
  } catch (error: any) {
    return error.response;
  }
}

axios.defaults.headers['Content-Type'] = 'application/json';

// Add a request interceptor
axios.interceptors.request.use(
  (config) => {
    const method = config.method?.toUpperCase() ?? '';
    if (SECURED_METHODS.indexOf(method) >= 0) {
      const jsonStr = JSON.stringify(config.data);
      Object.assign(config.headers, {'SonicX-hmac': hmac(jsonStr)});
    }

    const token = getJWT();
    if (token) {
      Object.assign(config.headers, {'Authorization': `Bearer ${token}`});
    }

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  function (response) {
    return response;
  },
  function (error) {
    // eslint-disable-next-line no-console
    console.log(error);
    // un-authentication error - token expired - or try to access un allowed api
    if (error.response.status === 401) {
      const currentBrand = getCurrentBrand();
      if (currentBrand) {
        // eslint-disable-next-line no-console
        console.log(currentBrand);
        redirectLogin(currentBrand);
      }
      cleanStore();
    }
    return Promise.reject(error);
  }
);
