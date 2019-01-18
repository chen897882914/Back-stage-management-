import request from '@/utils/request'

export function getList() {
  return request({
    url: '/city/list',
    method: 'get'
  })
}

export const add = (city) => {
  return request({
    url: '/city/add',
    method: 'get',
    params: {
      name: city
    }
  })
}
