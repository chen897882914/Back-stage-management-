const getters = {}

const state = {
  grade: '',
  type: '',
  isPresale: '',
  name: '',
  cityId: '',
  districtId: '',
  poster: '',
  actors: '',
  director: '',
  category: '',
  synopsis: '',
  nation: '',
  language: '',
  premiereAt: '',
  runtime: '',
  photos: [],
  grade: '',
  type: '',
  isPresale: '',

  name: '大黄蜂',
  type: '3D',
  poster:
    'https://static.maizuo.com/pc/v5/usr/movie/394c418ad9a14e301438176f3dd65028.jpg',
  actors: '',
  director: '老胡',
  category: '喜剧|科幻|动作',
  synopsis:
    '统领伯克岛的酋长嗝嗝，与阿丝翠德共同打造了一个奇妙而热闹的飞龙乌托邦。而一只雌性光煞飞龙的意外出现，加上一个前所未有的威胁的到来，令嗝嗝和没牙仔不得不离开自己唯一的家园，前往他们本以为只存在于神话之中的隐秘之境。在发现自己真正的命运之后，飞龙与骑士将携手殊死奋战，保护他们所珍爱的一切。',
  nation: '美国',
  language: '英语',
  // premiereAt: Date.now(),
  runtime: '100',
  photos: [
    'https://pic.maizuo.com/usr/100004539/0719de9fbe0bf2c69c01fb8fc311a7ea.jpg',
    'https://pic.maizuo.com/usr/100004539/1ffcbf7d4369c32315cef87bf58747bf.jpg',
    'https://pic.maizuo.com/usr/100004539/4862beb4c57ca0b64b5ac58cd2a3a8fa.jpg',
    'https://pic.maizuo.com/usr/100004539/60e3096b2cc6f0809aad311c707db805.jpg'
  ],
  grade: '8.8',
  isPresale: 'no'
}

const mutations = {
  update: (state, payload) => {
    state = {
      ...state,
      ...payload
    }
  }
}

export default {
  getters,
  state,
  mutations
}
