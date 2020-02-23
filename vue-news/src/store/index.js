import Vue from 'vue';
import Vuex from "vuex";

import mutations from './mutations.js';
import actions from './actions.js';
import state  from './state.js';
import getters from './getters.js';

Vue.use(Vuex);

export const store = new Vuex.Store({
  state: state,
  // getters는 computed와 동일한 속성인데 다만 store에 있는 것
  getters: getters,
  mutations: mutations,
  actions: actions
})