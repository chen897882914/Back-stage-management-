/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout'
// 影片
const router = {
  path: '/film',
  component: Layout,
  redirect: '/film/list',
  name: 'film',
  meta: {
    title: '影片',
    icon: 'film'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/film/list'), // Parent router-view
      name: 'film-list',
      meta: {
        title: '影片列表',
        icon: 'list'
      }
    },
    {
      path: 'add',
      // hidden: true,
      component: () => import('@/views/film/add'),
      meta: { title: '添加影片', icon: 'add' }
    },
    {
      path: 'edit/:filmId',
      // hidden: true,
      component: () => import('@/views/film/edit'),
      meta: { title: '编辑影片', icon: 'add' }
    },
    {
      path: 'detail',
      hidden: true,
      component: () => import('@/views/film/detail'),
      meta: { title: '影片详情', icon: 'detail' }
    }
  ]
}

export default router
