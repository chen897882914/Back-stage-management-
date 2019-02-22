/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'
// 影院
const router = {
  path: '/cinema',
  component: Layout,
  redirect: '/cinema/list',
  name: 'cinema',
  meta: {
    title: '影院',
    icon: 'cinema'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/cinema/list'), // Parent router-view
      name: 'cinema-list',
      meta: {
        title: '影院列表',
        icon: 'list'
      }
    },
    {
      path: 'add/:districtId',
      hidden: true,
      component: () => import('@/views/cinema/add'),
      meta: { title: '添加影院', icon: 'add' }
    },
    {
      path: 'detail',
      hidden: true,
      component: () => import('@/views/cinema/detail'),
      meta: { title: '影院详情', icon: 'detail' }
    }
  ]
}

export default router
