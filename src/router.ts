import Vue from 'vue';
import Router from 'vue-router';
import Layout from '_v/layout/Layout.vue';

Vue.use(Router);

export default new Router({
  mode: 'hash',
  routes: [
    { path: '/404', component: () => import(/* webpackChunkName: "404" */ '_v/NotFound.vue') },
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
          title: 'dashboard'
        },
        component: () => import(/* webpackChunkName: "dashboard" */ '_v/home.vue'),
      }],
    },
    {
      path: '/project-manage',
      component: Layout,
      name: 'info',
      meta: { title: '项目管理', icon: 'fa fa-gears' },
      children: [
        {
          path: 'project-list',
          name: 'project-list',
          component: () => import(/* webpackChunkName: "project" */ '_v/project-manage/project-list.vue'),
          meta: {title: '项目列表', icon: 'link'}
        },
        {
          path: 'task-list',
          name: 'task-list',
          component: () => import(/* webpackChunkName: "project" */ '_v/project-manage/task-list.vue'),
          meta: {title: '任务列表', icon: 'link'}
        },
        {
          path: 'operation-history',
          name: 'operation-history',
          component: () => import(/* webpackChunkName: "project" */ '_v/project-manage/operation-history.vue'),
          meta: {title: '操作历史', icon: 'link'}
        },
        {
          path: 'project-task',
          name: 'project-task',
          component: () => import(/* webpackChunkName: "project" */ '_v/project-manage/project-task.vue'),
          meta: {title: '项目任务列表', icon: 'link', hidden: true, noCache: true}
        }
      ]
    },
    { path: '*', redirect: '/404' },
  ],
});
