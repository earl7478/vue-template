// import context from "../main.js";
import axios from "axios";
import QS from "qs";
// import store from "../store/index";
import { Message } from "element-ui";
axios.defaults.timeout = 60000;
let isLoading
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.interceptors.request.use(config => {
  let userToken = localStorage.getItem('TOKEN')
  if (userToken && userToken.length > 0) {
    config.headers['token'] = userToken
  }
  // 防止缓存，GET请求默认带_t参数
  if (config.method === "get") {
    config.params = {...config.params, ...{_t: new Date().getTime()} }
  }
  return config
},error => {
    Promise.reject(error)
  }
);

// 响应拦截
axios.interceptors.response.use(response => {
  isLoading.close()
  if (response.data.code === 80001) {
    Message({ message: "登录失效 请重新登录", type: "error" });
  }
  return Promise.resolve(response);
}, error => {
    isLoading.close();
    return Promise.reject(error);
  }
)

/**
 * post方法，对应post请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @time {Object} params [请求超时时间]
 */
export function post(url, params, time = (3*60)) {
  return new Promise((resolve, reject) => {
    axios.post(url, QS.stringify(params), { timeout: time * 1000 }).then(res => {
        resolve(res.data);
    }).catch(err => {
      reject(err.data);
    })
  });
}
/**
 * get方法，对应get请求
 * @param {String} url [请求的url地址]
 * @param {Object} params [请求时携带的参数]
 * @time {Object} params [请求超时时间]
 */
export function get(url, params, time = (3 * 60)) {
  return new Promise((resolve, reject) => {
    axios.get(url, params, { timeout: time * 1000 }).then(res => {
      resolve(res.data);
    }).catch(err => {
      reject(err.data);
    })
  })
}