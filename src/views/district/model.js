import request from '@/utils/request'
// 属性说明
const attrDesc = {
  cityId: '城市id',
  // city: '城市名称',
  name: '区域名称'
}

const formData = {
  cityId: '',
  name: ''
}

const getList = () => {
  return request({
    url: '/district/getList',
    method: 'get'
  })
}

const add = district => {
  return request({
    url: '/district/add',
    method: 'get',
    params: {
      ...district
    }
  })
}

const del = id => {
  return request({
    url: '/district/delById',
    method: 'get',
    params: { id }
  })
}

const getDetail = districtId => {
  return request({
    url: '/district/findById',
    method: 'get',
    params: { districtId }
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
