import Vue from 'vue'
import Router from 'vue-router'
// import layout from '@/layout'

Vue.use(Router)
const router = new Router({
  // mode: 'history',
  routes: [{
      path: '/',
      redirect: '/home',
    },
    {
      path: '/home',
      name: 'homeIndex',
      component: () => import( /* webpackChunkName: "home" */ '@/views/home/index'),
    },

    {
      path: '/preview',
      name: 'previewIndex',
      component: () => import( /* webpackChunkName: "preview" */ '@/views/preview/index'),
    },

    {
      path: '/edit',
      name: 'editIndex',
      component: () => import( /* webpackChunkName: "edit" */ '@/views/edit/index'),
    },

    // 成功
    {
      path: '/success',
      name: 'successIndex',
      component: () => import( /* webpackChunkName: "success" */ '@/views/success'),
    },

    // 失败
    {
      path: '/failure',
      name: 'failureIndex',
      component: () => import( /* webpackChunkName: "failure" */ '@/views/failure'),
    },

    // 缺省页面
    {
      path: '/default',
      name: 'defaultIndex',
      component: () => import( /* webpackChunkName: "home" */ '@/views/default'),
    },
    {
      path: '/404',
      name: '404',
      component: () => import( /* webpackChunkName: "home" */ '@/views/notFound'),
    },
    {
      path: '*',
      name: 'notFound',
      redirect: {
        name: '404',
      },
    },
  ],
})

export default router