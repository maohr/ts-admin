import axios from 'axios';
import { Message, MessageBox } from 'element-ui';

// 创建axios实例
const service = axios.create({
  baseURL: process.env.VUE_APP_MOCK_API,
  timeout: 5000,
});

// request 拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    // Handle request error here
    Promise.reject(error);
  },
);

// respone 拦截器
service.interceptors.response.use(
  (response) => {
    /**
     * code为非20000是抛错 可结合自己业务进行修改
     */
    const res = response.data;
    return response.data;
  },
  (error) => {
    // Message({
    //   message: error.message,
    //   type: 'error',
    //   duration: 5 * 1000,
    // });
    return Promise.reject(error);
  },
);

export default service;
