/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'
// 城市
const router = {
  path: '/demo',
  component: Layout,
  redirect: '/demo/map',
  name: 'demo',
  meta: {
    title: '实例',
    icon: 'example'
  },
  children: [
    {
      path: 'map',
      meta: {
        title: '地图',
        icon: 'demo'
      },
      component: () => import('@/views/demo/map')
    },
    {
      path: 'map2',
      meta: {
        title: '闲置',
        icon: 'demo'
      },
      component: () => import('@/views/demo/map')
    }
  ]
}

export default router
