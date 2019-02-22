import request from '@/utils/request'
// 属性说明
const attrDesc = {
  name: '城市名称',
  pinyin: '城市拼音'
  // isHot: '热门城市'
}

const formData = {
  cityId: '',
  isHot: false,
  name: '',
  pinyin: ''
}

const getList = () => {
  return request({
    url: '/city/getList',
    method: 'get'
  })
}

const add = city => {
  return request({
    url: '/city/add',
    method: 'get',
    params: {
      ...city
    }
  })
}

const del = id => {
  return request({
    url: '/city/delById',
    method: 'get',
    params: { id }
  })
}

const getDetail = cityId => {
  return request({
    url: '/city/findById',
    method: 'get',
    params: { cityId }
  })
}

export default {
  formData,
  attrDesc,
  add,
  getDetail,
  del,
  getList
}
