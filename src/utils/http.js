import axios from 'axios';
import {
  Message
} from 'element-ui';

const env = 'dev';
// 设置基本路径
switch (env) {
  case 'dev':
    axios.defaults.baseURL = 'http://127.0.0.1:3000/admin';
    break;
  case 'test':
    axios.defaults.baseURL = 'http://132.232.87.95:3000/admin';
    break;
  case 'prod':
    // todo
}

const get = (url, params) => {
  params = params || {};
  return new Promise((resolve, reject) => {
    axios
      .get(url, {
        params
      })
      .then(res => {
        if (res.data.code === '666') {
          resolve(res.data);
        } else {
          Message({
            message: res.data.msg,
            type: 'error',
            duration: 5 * 1000
          });
        }
      })
      .catch(error => {
        Message({
          message: '网络异常',
          type: 'error',
          duration: 5 * 1000
        });
      });
  });
};
const post = (url, params) => {
  params = params || {};
  return new Promise((resolve, reject) => {
    axios
      .post(url, params)
      .then(res => {
        if (res.data.code === '666') {
          resolve(res.data);
        } else {
          Message({
            message: res.data.msg,
            type: 'error',
            duration: 5 * 1000
          });
        }
      })
      .catch(error => {
        Message({
          message: '网络异常',
          type: 'error',
          duration: 5 * 1000
        });
      });
  });
};

export default {
  get,
  post
};
