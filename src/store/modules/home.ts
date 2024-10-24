interface IState {
  count: number
}

interface IActions {
  commit: (param: string) => void
}

const state: IState = {
  count: 0,
};

const mutations = {
  add(state: IState) {
    state.count++;
  },

};

const actions = {
  add({ commit }: IActions) {
    commit('add');
  },
};

const getters = {
  doubleCount: (state: IState) => state.count * 2,
};

export default {
  namespaced: true,
  state,
  mutations,
  actions,
  getters
};