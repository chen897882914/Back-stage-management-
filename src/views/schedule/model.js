import request from '@/utils/request'
// 属性说明
const attrDesc = {
  filmId: '电影id',
  advanceStopMins: 'advanceStopMins',
  payDay: '上映日期',
  showAt: '开始时间',
  endAt: '结束时间',
  filmLanguage: '电影语言',
  hallName: '影厅序号',
  imagery: '成影类型',
  isOnsell: '在售',
  marketPrice: '市场价格',
  salePrice: '售价'
}

const formData = {
  filmId: '',
  payDay: '2019-01-19',
  advanceStopMins: 15,
  endAt: 1548390000,
  filmLanguage: '原声',
  hallName: '9号4K巨幕厅',
  imagery: '2D',
  isOnsell: true,
  marketPrice: 10000,
  salePrice: 3000,
  scheduleId: 951097166,
  showAt: 1548382800
}

const getList = () => {
  return request({
    url: '/schedule/getList',
    method: 'get'
  })
}

const add = schedule => {
  return request({
    url: '/schedule/add',
    method: 'get',
    params: {
      ...schedule
    }
  })
}

const del = id => {
  return request({
    url: '/schedule/delById',
    method: 'get',
    params: { id }
  })
}

const getDetail = id => {
  return request({
    url: '/schedule/findById',
    method: 'get',
    params: { id }
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
