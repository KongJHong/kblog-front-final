import Cookies from 'js-cookie';

// User
const tokenKey = "kblog_auth";
export const getToken = () => Cookies.get(tokenKey);      // 获取token
export const setToken = (token: string) => Cookies.set(tokenKey, token); // 设置token
export const removeToken = () => Cookies.remove(tokenKey);   // 移除token