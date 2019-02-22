/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'
// 影院
const router = {
  path: '/schedule',
  component: Layout,
  redirect: '/schedule/list',
  name: 'schedule',
  meta: {
    title: '上映计划',
    icon: 'schedule'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/schedule/list'), // Parent router-view
      name: 'schedule-list',
      meta: {
        title: '计划列表',
        icon: 'list'
      }
    },
    {
      path: 'add/:filmId',
      hidden: true,
      component: () => import('@/views/schedule/add'),
      meta: { title: '添加计划', icon: 'add' }
    },
    {
      path: 'detail',
      hidden: true,
      component: () => import('@/views/schedule/detail'),
      meta: { title: '计划详情', icon: 'detail' }
    }
  ]
}

export default router
