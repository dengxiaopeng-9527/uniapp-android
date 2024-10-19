const state = {
  count: 0,
};

const mutations = {
  add(state) {
    state.count++;
  },

};

const actions = {
  add({ commit }) {
    commit('add');
  },
};

const getters = {
  doubleCount: (state) => state.count * 2,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};