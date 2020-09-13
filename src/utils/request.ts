import { UserModule } from '@/store/modules';
import axios, { AxiosRequestConfig, AxiosResponse } from 'axios';
import {Message} from 'element-ui';
import { setToken } from './cookies';

// const server = axios.create({
//   baseURL: 'http://localhost:8081/',        // 请求前缀
//   withCredentials: true,  // 请求是否携带凭证
//   timeout: 5000           // 请求超时时间s
// })

axios.defaults.headers = {
  "Content-Type": "application/json;charset=utf8"
}

axios.defaults.baseURL = "http://localhost:4000";

// request请求拦截
axios.interceptors.request.use((config: AxiosRequestConfig)=>{
  if (config.url != '/login' &&  UserModule.token) {
    config.headers.authorization = UserModule.token;
  }
  return config;
},(error: any)=>{
  return Promise.reject(error);
});

// TODO response响应拦截 
axios.interceptors.response.use((response: AxiosResponse)=>{
  // 根据返回code，设置弹框   错误码和message字段和架构商榷好
  const data = response.data;
  const headers = response.headers;
  if(data.code !== 200) {
    Message({
      type: 'error',
      message: data.msg || 'Error',
      duration: 5 * 1000
    })
  }


  if(headers.authorization) {
    
    // UserModule.SET_TOKEN()
    setToken(headers.authorization)
  }

  return response;
})

/**
 * get方法，把json数据整合到url中
 * @param link 连接
 * @param json json数据
 */
export function formateURLOnlyGet(link: string, json?: object){
  let url = link;
  /**
   * const obj = { foo: 'bar', baz: 'abc' }; 
      console.log(Object.entries(obj));  // [['foo', 'bar'], ['baz', 'abc']]
   */
  let data = json ? Object.entries(json) : [];

  if(data.length){
    url += url.indexOf("?") == -1 ? "?":"";
    //['0':['foo', 'bar'],'1':['baz', 'abc']]
    url += Object.entries(data)
          .map(item => {
            return item[1].join("=")
          })
          .join("&");
  }
  return url;
}


// 导出axios封装
// export default server;

/**
 * GET请求方法
 * @param url 请求地址
 * @param json 请求参数
 */
export function getAPI<T>(url: string, json?: object) {
  return axios.get<T>(formateURLOnlyGet(url,json))
                .then(resp => resp.data)
}

export function postAPI<T>(url: string, json: object) {
  return axios.post<T>(url, json)
                .then(resp => resp.data)
}

export function putAPI<T>(url: string, json: object) {
  return axios.put<T>(url,json)
              .then(resp => resp.data)
}

export function deleteAPI<T>(url: string, json: object){
  return axios.delete<T>(url,json)
              .then(resp => resp.data)
}
