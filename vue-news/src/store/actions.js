import {
  fetchNewsList,
  fetchJobsList,
  fetchAskList,
  fetchUserInfo,
  fetchCommentItem,
  fetchList
} from "../api/index.js";

export default {
  async FETCH_NEWS(context) {
    try {
      const response = await fetchNewsList();
      context.commit("SET_NEWS", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_JOBS({ commit }) {
    try {
      const response = await fetchJobsList();
      commit("SET_JOBS", response.data);
      return response;
    } catch (error) {
      console.log(error);
    }
  },
  async FETCH_ASK({ commit }) {
    const response = await fetchAskList();
    commit("SET_ASK", response.data);
    return response;
  },
  async FETCH_USER({ commit }, name) {
    const response = await fetchUserInfo(name);
    commit("SET_UER", response.data);
    return response;
  },
  async FETCH_ITEM({ commit }, id) {
    const { data } = fetchCommentItem(id);
    commit("SET_ITEM", data);
    return data;
  },
  async FETCH_LIST({ commit }, pageName) {
    const { data } = await fetchList(pageName);
    commit("SET_LIST", data);
    return data;
  }
};
