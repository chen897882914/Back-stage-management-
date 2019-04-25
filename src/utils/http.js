import axios from 'axios';

const env = 'test';
// 设置基本路径
switch (env) {
  case 'dev':
    axios.defaults.baseURL = 'http://192.168.1.67:3000/admin';
    break;
  case 'test':
    axios.defaults.baseURL = 'http://132.232.87.95:3000/admin';
    break;
  case 'prod':
    // todo
}

const get = axios.get;
const post = axios.post;

export default{
  get,
  post
};
