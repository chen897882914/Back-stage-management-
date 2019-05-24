import Vue from 'vue';
import Router from 'vue-router';

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router);

/* Layout */
import Layout from '../views/layout/Layout';

/**
* hidden: true                   if `hidden:true` will not show in the sidebar(default is false)
* alwaysShow: true               if set true, will always show the root menu, whatever its child routes length
*                                if not set alwaysShow, only more than one route under the children
*                                it will becomes nested mode, otherwise not show the root menu
* redirect: noredirect           if `redirect:noredirect` will no redirect in the breadcrumb
* name:'router-name'             the name is used by <keep-alive> (must set!!!)
* meta : {
    title: 'title'               the name show in submenu and breadcrumb (recommend set)
    icon: 'svg-name'             the icon show in the sidebar
    breadcrumb: false            if false, the item will hidden in breadcrumb(default is true)
  }
**/

export const constantRouterMap = [{
  path: '/',
  component: Layout,
  redirect: '/index',
  name: 'index',
  children: [{
    path: 'index',
    meta: {
      title: '卖座后台管理系统',
      icon: 'home'
    },
    component: () => import('@/views/dashboard/index')
  }]
},
{
  path: '/demo',
  component: Layout,
  meta: {
    title: 'demo',
    icon: 'demo'
  },
  children: [
    {
      path: 'demo1',
      meta: {
        title: 'demo1',
        icon: 'demo'
      },
      component: () => import('@/views/demo/demo1')
    },
    {
      path: 'demo2',
      meta: {
        title: 'demo2',
        icon: 'demo'
      },
      component: () => import('@/views/demo/demo2')
    }
  ]
},
// 城市列表
{
  path: '/city',
  redirect: '/city/list',
  component: Layout,
  name: 'city',
  meta: {
    title: '城市',
    icon: 'city'
  },
  children: [
    {
      path: 'list',
      name: 'city-list',
      meta: {
        title: '城市列表',
        icon: 'list'
      },
      component: () => import('@/views/city/list')
    },
    {
      path: 'add',
      name: 'city-add',
      meta: {
        title: '添加城市',
        icon: 'add'
      },
      component: () => import('@/views/city/add')
    },
    {
      path: 'edit/:cityId',
      hidden: true,
      name: 'city-edit',
      meta: {
        title: '编辑城市',
        icon: 'demo'
      },
      component: () => import('@/views/city/edit')
    }
  ]
},
// 区域列表
{
  path: '/region',
  redirect: '/region/list',
  component: Layout,
  name: 'region',
  meta: {
    title: '区域',
    icon: 'region'
  },
  children: [
    {
      path: 'list',
      name: 'region-list',
      meta: {
        title: '区域列表',
        icon: 'region'
      },
      component: () => import('@/views/region/list')
    },
    {
      path: 'add/:cityId/:cityName',
      name: 'region-add',
      hidden: true,
      meta: {
        title: '添加区域',
        icon: 'add'
      },
      component: () => import('@/views/region/add')
    },
    {
      path: 'edit/:areaId',
      hidden: true,
      name: 'region-edit',
      meta: {
        title: '编辑区域',
        icon: 'edit'
      },
      component: () => import('@/views/region/edit')
    }
  ]
},
// 影院模块
{
  path: '/cinema',
  redirect: '/cinema/list',
  component: Layout,
  name: 'cinema',
  meta: {
    title: '影院',
    icon: 'cinema'
  },
  children: [
    {
      path: 'list',
      name: 'cinema-list',
      meta: {
        title: '影院列表',
        icon: 'list'
      },
      component: () => import('@/views/cinema/list')
    },
    {
      path: 'add',
      name: 'cinema-add',
      meta: {
        title: '添加影院',
        icon: 'add'
      },
      component: () => import('@/views/cinema/add')
    },
    {
      path: 'edit/:cinemaId',
      name: 'cinema-edit',
      hidden: true,
      meta: {
        title: '编辑影院',
        icon: 'edit'
      },
      component: () => import('@/views/cinema/edit')
    }
  ]
},
// 轮播图模块
{
  path: '/banner',
  redirect: '/banner/list',
  component: Layout,
  name: 'banner',
  meta: {
    title: '轮播图',
    icon: 'banner'
  },
  children: [
    {
      path: 'list',
      name: 'banner-list',
      meta: {
        title: '轮播图列表',
        icon: 'list'
      },
      component: () => import('@/views/banner/list')
    },
    {
      path: 'add',
      name: 'banner-add',
      meta: {
        title: '添加图片',
        icon: 'add'
      },
      component: () => import('@/views/banner/add')
    }
  ]
},
// 电影模块
{
  path: '/mover',
  redirect: '/mover/list',
  component: Layout,
  name: 'mover',
  meta: {
    title: '电影',
    icon: 'mover'
  },
  children: [
    {
      path: 'list',
      name: 'mover-list',
      meta: {
        title: '电影列表',
        icon: 'list'
      },
      component: () => import('@/views/mover/list')
    },
    {
      path: 'add',
      name: 'mover-add',
      meta: {
        title: '添加电影',
        icon: 'add'
      },
      component: () => import('@/views/mover/add')
    },
    {
      path: 'edit/:filmId',
      name: 'mover-edit',
      hidden: true,
      meta: {
        title: '编辑电影',
        icon: 'edit'
      },
      component: () => import('@/views/mover/edit')
    }
  ]
},
{
  path: '/login',
  component: () => import('@/views/login/index'),
  hidden: true
},
{
  path: '*',
  redirect: '/404',
  hidden: true
}

];

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({
    y: 0
  }),
  routes: constantRouterMap
});
