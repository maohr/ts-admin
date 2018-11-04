import Vue from 'vue';
import Router from 'vue-router';
import Layout from '@/views/layout/Layout.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/404', component: () => import(/* webpackChunkName: "404" */ '@/views/404.vue') },
    {
      path: '/',
      component: Layout,
      redirect: '/dashboard',
      name: '智能客服系统',
      meta: { hidden: true },
      children: [{
        path: 'dashboard',
        component: () => import(/* webpackChunkName: "dashboard" */ '@/views/home.vue'),
      }],
    },
    {
      path: '/orders',
      component: Layout,
      name: '会员信息管理',
      meta: { title: '会员信息管理', icon: 'nested' },
      children: [
        {
          path: 'oss-order-list',
          name: 'oss订单列表',
          component: () => import(/* webpackChunkName: "oss-order-list" */ '@/views/home.vue'),
          meta: {title: 'oss订单列表', icon: 'link'},
        },
        {
          path: 'movies-order-list',
          name: '业务订单列表',
          component: () => import(/* webpackChunkName: "movies-order-list" */ '@/views/home.vue'),
          meta: {title: '业务订单列表', icon: 'link'},

        },
      ],
    },
    {
      path: '/union-manager',
      component: Layout,
      name: '系统管理',
      meta: { title: '系统管理', icon: 'nested' },
      children: [
        {
          path: 'account-list',
          name: '系统账户管理',
          component: () => import(/* webpackChunkName: "account-list" */ '@/views/home.vue'),
          meta: {title: '系统账户列表', icon: 'link'},
        },
        {
          path: 'app-list',
          name: '接入应用管理',
          component: () => import(/* webpackChunkName: "app-list" */ '@/views/home.vue'),
          meta: {title: '接入应用列表', icon: 'link'},
        },
        {
          path: 'role-list',
          name: '系统角色管理',
          component: () => import(/* webpackChunkName: "role-list" */ '@/views/home.vue'),
          meta: {title: '角色列表', icon: 'link'},
        },
      ],
    },

    { path: '*', redirect: '/404' },
  ],
});
