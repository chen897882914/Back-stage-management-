import request from '@/utils/request'
// 属性说明
const attrDesc = {
  name: '电影名称',
  poster: '海报',
  //	actors: "演员表",
  director: '导演',
  category: '分类',
  synopsis: '简介',
  //	filmType: "类别",
  nation: '产地',
  language: '语言',
  videoId: 'videoId',
  premiereAt: '首映式',
  timeType: 'timeType',
  runtime: '影片时长',
  //	photos: "照片集",
  grade: '评分',
  //	item: "item",
  isPresale: '预售',
  isSale: '售卖中'
}

const formData = {
  name: '大黄蜂',
  poster:
    'https://pic.maizuo.com/usr/movie/91ff8d8dc5ef8d0060efa9d72e1177eb.jpg',
  actors: [
    {
      name: '特拉维斯·奈特',
      role: '导演',
      avatarAddress:
        'https://pic.maizuo.com/usr/movie/00e0b6f6e3feceb831c65b43aacb7e02.jpg'
    }
  ],
  director: '特拉维斯·奈特',
  category: '动作|科幻|冒险',
  synopsis:
    '本片故事设定在1987年，正值青春期的18岁少女查理Charlie（海莉·斯坦菲尔德 饰）在加州海边小镇的废弃场里发现了伤痕累累的大黄蜂，他们之间会发生怎样的故事呢？让我们拭目以待！',
  filmType: {
    name: '2D',
    value: 1
  },
  nation: '美国',
  language: '英语',
  videoId: 'XMzk0OTI4NDYwOA==',
  premiereAt: 1546560000,
  timeType: 3,
  runtime: 100,
  photos: [
    'https://pic.maizuo.com/usr/100004485/158624c823fd897db8e4ce66d305dec4.jpg',
    'https://pic.maizuo.com/usr/100004485/34abc67070cb63e49cc251b540f1c4c8.jpg'
  ],
  grade: '7.2',
  item: {
    name: '2D',
    type: 1
  },
  isPresale: false,
  isSale: true
}

const getList = () => {
  return request({
    url: '/film/getList',
    method: 'get'
  })
}

const add = film => {
  return request({
    url: '/film/add',
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
  formData,
  attrDesc,
  add,
  getDetail,
  del,
  getList
}
