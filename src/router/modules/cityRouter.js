/** When your routing table is too long, you can split it into small modules**/

import Layout from '@/views/layout/Layout';
// 城市
const router = {
  path: '/city',
  component: Layout,
  redirect: '/city/list',
  name: 'city',
  meta: {
    title: '城市',
    icon: 'city'
  },
  children: [
    {
      path: 'list',
      component: () => import('@/views/city/list'), // Parent router-view
      name: 'city-list',
      meta: {
        title: '城市列表',
        icon: 'list'
      }
    },
    {
      path: 'add',
      name: 'add city',
      component: () => import('@/views/city/add'),
      meta: { title: '添加城市', icon: 'add' }
    },
    {
      path: 'edit/:cityId',
      hidden: true,
      name: 'edit city',
      component: () => import('@/views/city/edit'),
      meta: { title: '编辑城市', icon: 'edit' }
    }
  ]
};

export default router;
