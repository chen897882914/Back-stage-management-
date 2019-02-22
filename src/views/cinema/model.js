import request from '@/utils/request'
// 属性说明
const attrDesc = {
  name: '影院名称',
  address: '地址',
  longitude: '经度',
  latitude: '纬度',
  gpsAddress: '经纬度',
  districtId: '区域id',
  districtName: '区域名称',
  // 'district': {
  //   'districtId': 440304,
  //   'name': '福田区'
  // },
  phone: '电话',
  telephones: '电话列表',
  // 'logoUrl': 'logo地址',
  businessTime: 'businessTime',
  notice: 'notice',
  isVisited: '已观看',
  // 'services': [{
  //   'name': '儿童票',
  //   'description': '1.3米以下儿童可免费无座观影（MX4D厅除外），一名成人限带一名儿童（仅限1.3米以下）'
  // }, {
  //   'name': '停车',
  //   'description': '东海缤纷天地地下停车场，凭当日票根50元免停1小时，100元免停2小时'
  // }, {
  //   'name': '3D眼镜',
  //   'description': '为确保顾客观影卫生，请自带3D眼镜或前往前台购买，每副5元起'
  // }],
  // 'services': '服务',
  lowPrice: '低价',
  Distance: '距离'
}

const formData = {
  name: '英皇电影城（东海缤纷店）',
  address: '东海国际中心二期B区101之B1002号商铺',
  longitude: 114.027958,
  latitude: 22.542708,
  gpsAddress: '114.027958:22.542708',
  cityId: 440300,
  cityName: '深圳市',
  districtId: 440304,
  districtName: '福田区',
  district: {
    districtId: 440304,
    name: '福田区'
  },
  phone: '0755-32935088',
  telephones: ['0755-32935088'],
  logoUrl:
    'https://pic.maizuo.comusr/8119/4c825a0a7d23df9fed5b85caad9a4bc7.jpg',
  businessTime: '',
  notice: '',
  isVisited: 0,
  services: [
    {
      name: '儿童票',
      description:
        '1.3米以下儿童可免费无座观影（MX4D厅除外），一名成人限带一名儿童（仅限1.3米以下）'
    },
    {
      name: '停车',
      description:
        '东海缤纷天地地下停车场，凭当日票根50元免停1小时，100元免停2小时'
    },
    {
      name: '3D眼镜',
      description: '为确保顾客观影卫生，请自带3D眼镜或前往前台购买，每副5元起'
    }
  ],
  lowPrice: 0,
  Distance: 0
}

const getList = () => {
  return request({
    url: '/cinema/getList',
    method: 'get'
  })
}

const add = cinema => {
  return request({
    url: '/cinema/add',
    method: 'get',
    params: {
      ...cinema
    }
  })
}

const del = id => {
  return request({
    url: '/cinema/delById',
    method: 'get',
    params: { id }
  })
}

const getDetail = cinemaId => {
  return request({
    url: '/cinema/findById',
    method: 'get',
    params: { cinemaId }
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
