import request from '@/utils/request'
// 属性说明
const attrDesc = {
  name: '电影名称',
  filmId: '电影编号',
  poster: '海报',
  cityId: '城市编号',
  city: '城市',
  districtId: '区域编号',
  district: '区域',
  //	actors: "演员表",
  director: '导演',
  // category: '分类',
  // synopsis: '简介',
  //	filmType: "类别",
  nation: '产地',
  language: '语言',
  // videoId: 'videoId',
  // premiereAt: '首映式',
  // timeType: 'timeType',
  runtime: '影片时长',
  //	photos: "照片集",
  grade: '评分'
  // type: '类型'
  //	item: "item",
  // isPresale: '预售',
  // isSale: '售卖中'
}

const form = {
  name: '驯龙高手3',
  filmId: '',
  poster:
    'https://static.maizuo.com/pc/v5/usr/movie/394c418ad9a14e301438176f3dd65028.jpg',
  actors: [],
  director: '迪恩·德布洛斯',
  category: ['动画', '奇幻', '冒险'],
  synopsis:
    '统领伯克岛的酋长嗝嗝，与阿丝翠德共同打造了一个奇妙而热闹的飞龙乌托邦。而一只雌性光煞飞龙的意外出现，加上一个前所未有的威胁的到来，令嗝嗝和没牙仔不得不离开自己唯一的家园，前往他们本以为只存在于神话之中的隐秘之境。在发现自己真正的命运之后，飞龙与骑士将携手殊死奋战，保护他们所珍爱的一切。',
  // filmType: {
  //   name: '2D',
  //   value: 1
  // },
  nation: '美国',
  language: '英语',
  // videoId: 'XMzk0OTI4NDYwOA==',
  premiereAt: '1551398400',
  // timeType: 3,
  runtime: '100',
  photos: [],
  grade: '7.8',
  // item: {
  //   name: '2D',
  //   type: 1
  // },
  type: '',
  isPresale: false
  // isSale: false
}

// 需要的属性
const needAttr = (form, data) => {
  for (var p in form) {
    form[p] = data[p]
  }
  return form
}

const getList = () => {
  return request({
    url: '/film/getList',
    method: 'get'
  })
}

const getDistrictList = () => {
  return request({
    url: '/district/getList',
    method: 'get'
  })
}

const add = film => {
  return request({
    url: '/film/add',
    method: 'post',
    data: film
  })
}
const update = film => {
  return request({
    url: '/film/update',
    method: 'get',
    params: {
      ...film
    }
  })
}

const del = id => {
  return request({
    url: '/film/delById',
    method: 'get',
    params: { id }
  })
}

const getDetail = filmId => {
  return request({
    url: '/film/findById',
    method: 'get',
    params: { filmId }
  })
}

export default {
  form,
  attrDesc,
  add,
  getDetail,
  del,
  update,
  needAttr,
  getList,
  getDistrictList
}
