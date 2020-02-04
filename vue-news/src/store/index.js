import Vue from 'vue';
import Vuex from "vuex";

import { fetchNewsList, fetchJobsList, fetchAskList } from "../api/index.js";

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: {
    news: [],
    jobs: [],
    ask: [],
  },
  // getters는 computed와 동일한 속성인데 다만 store에 있는 것
  getters: {
    ask(state) {
      return state.ask;
    }
  },
  mutations: {
    SET_NEWS(state, news) {
      state.news = news;
    },
    SET_JOBS(state, jobs) {
      state.jobs = jobs
    },
    SET_ASK(state, ask) {
      state.ask = ask
    }
  },
  actions: {
    FETCH_NEWS(context) {
      fetchNewsList()
        .then(response => {
          console.log('response ', response);
          context.commit('SET_NEWS', response.data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    FETCH_JOBS({ commit }) {
      fetchJobsList()
        .then(({ data }) => {
          console.log('data ', data);
          commit('SET_JOBS', data);
        })
        .catch(error => {
          console.log(error);
        });
    },
    FETCH_ASK({ commit }) {
      fetchAskList()
        .then(({ data }) => {
          commit('SET_ASK', data)
        })
        .catch(error => {
          console.log(error)
        });
    }
  }
})