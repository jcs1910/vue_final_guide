import Vue from 'vue';
import VueRouter from "vue-router";

import UserView from '../views/UserView.vue';
import ItemView from '../views/ItemView.vue';
import createListView from '../views/CreateListView.js'

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: 'history', // url # 값 제거
  routes: [
    {
      path: '/',
      redirect: '/news',
    },
    {
      // path: url 주소
      path: "/news",
      name: 'news',
      // component: url 주소에 갔을 때 표시될 컴포넌트
      component: createListView('NewsView')
    },
    {
      path: "/ask",
      name: 'ask',
      component: createListView('AskView')
    },
    {
      path: "/jobs",
      name: 'jobs',
      component: createListView('JobsView')
    },
    {
      path: "/user/:id",
      component: UserView
    },
    {
      path: "/item/:id",
      component: ItemView
    },
  ]
});
