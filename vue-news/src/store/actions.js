import { 
  fetchNewsList, 
  fetchJobsList, 
  fetchAskList, 
  fetchUserInfo, 
  fetchCommentItem,
} from "../api/index.js";

export default {
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
        .then(({ data }) => { // response.data 를 data로 destructuring 함
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
    },
    FETCH_USER({ commit }, name) {
      fetchUserInfo(name)
        .then(({ data }) => {
          commit('SET_USER', data)
        })
        .catch(error => {
          console.log(error);
        })
    },
    FETCH_ITEM({ commit }, id) {
      fetchCommentItem(id)
        .then(({ data }) => {
          commit('SET_ITEM', data)
        })
        .catch(error => {
          console.log(error);
        })
    }
  }