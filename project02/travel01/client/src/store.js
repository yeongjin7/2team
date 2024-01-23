
// import { createStore } from 'vuex';

// export default createStore({
//   state: {
//     storedData: null,
//   },
//   mutations: {
//     setStoredData(state, data) {
//       state.storedData = data;
//     },
//   },
//   actions: {
//     storeData({ commit }, data) {
//       // You can perform any asynchronous operations here (e.g., API calls)
//       commit('setStoredData', data);
//     },
//   },
//   getters: {
//     getStoredData: (state) => state.storedData,
//   },
// });
// store.js

import { createStore } from 'vuex';

const store = createStore({
  state: {
    storedData: null,
  },
  mutations: {
    storeData(state, data) {
      state.storedData = data;
    },
  },
  actions: {
    storeData({ commit }, data) {
      commit('storeData', data);
    },
  },
  getters: {
    getStoredData: (state) => state.storedData,
  },
});

export default store;

