/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'
// 城市
const router = {
  path: '/district',
  component: () => import('@/views/district'),
  name: 'district',
  component: Layout,
  meta: { title: '区域', icon: 'district' },
  redirect: '/district/list',
  children: [
    {
      path: 'list',
      name: 'district-list',
      meta: { title: '区域列表', icon: 'list' },
      component: () => import('@/views/district/list')
    },
    {
      path: 'add/:cityId',
      hidden: true,
      name: 'district-add',
      component: () => import('@/views/district/add'),
      meta: { title: '添加区域', icon: 'add' }
    }
  ]
}

export default router
