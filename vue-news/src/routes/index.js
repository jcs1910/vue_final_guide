import Vue from "vue";
import VueRouter from "vue-router";
import NewsView from "../views/NewsView.vue";
import AskView from "../views/AskView.vue";
import JobsView from "../views/JobsView.vue";

import UserView from "../views/UserView.vue";
import ItemView from "../views/ItemView.vue";
// import createListView from '../views/CreateListView.js'

import bus from "../utils/bus.js";
import { store } from "../store/index.js";

Vue.use(VueRouter);

export const router = new VueRouter({
  mode: "history", // url # 값 제거
  routes: [
    {
      path: "/",
      redirect: "/news"
    },
    {
      // path: url 주소
      path: "/news",
      name: "news",
      // component: url 주소에 갔을 때 표시될 컴포넌트
      // component: createListView('NewsView')
      component: NewsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            bus.$emit("end:spinner");
            next();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    {
      path: "/ask",
      name: "ask",
      // component: createListView('AskView')
      component: AskView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            bus.$emit("end:spinner");
            next();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    {
      path: "/jobs",
      name: "jobs",
      // component: createListView('JobsView')
      component: JobsView,
      beforeEnter: (to, from, next) => {
        bus.$emit("start:spinner");
        store
          .dispatch("FETCH_LIST", to.name)
          .then(() => {
            bus.$emit("end:spinner");
            next();
          })
          .catch(error => {
            console.log(error);
          });
      }
    },
    {
      path: "/user/:id",
      component: UserView
    },
    {
      path: "/item/:id",
      component: ItemView
    }
  ]
});
