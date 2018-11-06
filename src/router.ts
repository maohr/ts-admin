import Vue from 'vue';
import Router from 'vue-router';
import Layout from '_v/layout/Layout.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/404', component: () => import(/* webpackChunkName: "404" */ '_v/404.vue') },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      name: 'index',
      meta: { hidden: true },
      children: [{
        path: 'dashboard',
        name: 'dashboard',
        meta: {
          title: 'index'
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '_v/home.vue'),
      }],
    },
    {
      path: '/orders',
      component: Layout,
      name: 'info',
      meta: { title: '订单管理', icon: 'nested' },
      children: [
        {
          path: 'order-list-1',
          name: 'order-1',
          component: () => import(/* webpackChunkName: "order-list-1" */ '_v/order-1.vue'),
          meta: {title: '订单列表1', icon: 'link'},
        },
        {
          path: 'order-list-2',
          name: 'order-2',
          component: () => import(/* webpackChunkName: "order-list-2" */ '_v/order-2.vue'),
          meta: {title: '订单列表2', icon: 'link'}
        },
      ],
    },
    {
      path: '/union-manager',
      component: Layout,
      name: 'system',
      meta: { title: '系统管理', icon: 'nested' },
      children: [
        {
          path: 'system-1',
          name: 'system-1',
          component: () => import(/* webpackChunkName: "account-list" */ '_v/system-1.vue'),
          meta: {title: '系统管理-1', icon: 'link', noCache: true},
        },
        {
          path: 'system-2',
          name: 'system-2',
          component: () => import(/* webpackChunkName: "app-list" */ '_v/system-2.vue'),
          meta: {title: '系统管理-2', icon: 'link'},
        },
        {
          path: 'system-3',
          name: 'system-3',
          component: () => import(/* webpackChunkName: "role-list" */ '_v/system-3.vue'),
          meta: {title: '系统管理-3', icon: 'link'},
        },
      ],
    },

    { path: '*', redirect: '/404' },
  ],
});
