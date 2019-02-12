import Vue from 'vue'
import Router from 'vue-router'

// in development-env not use lazy-loading, because lazy-loading too many pages will cause webpack hot update too slow. so only in production use lazy-loading;
// detail: https://panjiachen.github.io/vue-element-admin-site/#/lazy-loading

Vue.use(Router)

/* Layout */
import Layout from '../views/layout/Layout'

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
export const constantRouterMap = [
  { path: '/login', component: () => import('@/views/login/index'), hidden: true },
  { path: '/404', component: () => import('@/views/404'), hidden: true },

  {
    path: '/',
    component: Layout,
    redirect: '/dashboard',
    name: 'Dashboard',
    hidden: true,
    children: [{
      path: 'dashboard',
      component: () => import('@/views/dashboard/index')
    }]
  }
]

export const asyncRouterMap = [
  {
    path: '/homepage',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'homepage',
        component: () => import('@/views/homepage/index'),
        meta: { title: '首页管理', icon: 'form',
          role: ['admin', 'super_editor', 'editor']
        }
      }
    ]
  },
  {
    path: '/user',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'user',
        component: () => import('@/views/user/index'),
        meta: { title: '权限管理', icon: 'form',
          role: ['admin', 'super_editor']
        }
      }
    ]
  },
  {
    path: '/article',
    component: Layout,
    meta: { title: '文章管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'article',
        component: () => import('@/views/article/index'),
        meta: { title: '文章管理', icon: 'form',
          role: ['admin', 'super_editor', 'editor']
        }
      },
      {
        path: 'addarticle',
        name: 'addarticle',
        component: () => import('@/views/article/addarticle'),
        meta: { title: '新增文章', icon: 'form',
          role: ['admin', 'super_editor', 'editor']
        }
      }
    ]
  },
  {
    path: '/picture',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'picture',
        component: () => import('@/views/picture/index'),
        meta: { title: '图片管理', icon: 'form',
          role: ['admin', 'super_editor', 'editor']
        }
      }
    ]
  },
  {
    path: '/product',
    component: Layout,
    meta: { title: '产品管理', icon: 'example' },
    children: [
      {
        path: 'index',
        name: 'product',
        component: () => import('@/views/product/index'),
        meta: { title: '产品管理', icon: 'form',
          role: ['admin', 'super_editor', 'editor']
        }
      },
      {
        path: 'attribute',
        name: 'attribute',
        component: () => import('@/views/product/attribute'),
        meta: { title: '属性管理', icon: 'form',
          role: ['admin', 'super_editor', 'editor']
        }
      },
      {
        path: 'spec',
        name: 'spec',
        component: () => import('@/views/product/spec'),
        meta: { title: '规格管理', icon: 'form',
          role: ['admin', 'super_editor', 'editor']
        }
      }
    ]
  },

  {
    path: '/form',
    component: Layout,
    children: [
      {
        path: 'index',
        name: 'Form',
        component: () => import('@/views/form/index'),
        meta: { title: 'Form', icon: 'form' }
      }
    ]
  },

  { path: '*', redirect: '/404', hidden: true }
]

export default new Router({
  // mode: 'history', //后端支持可开
  scrollBehavior: () => ({ y: 0 }),
  routes: constantRouterMap
})
