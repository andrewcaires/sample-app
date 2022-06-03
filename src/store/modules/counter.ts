import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

export interface State {
  count: number;
}

export const state: State = {
  count: 0,
};

export const actions: ActionTree<State, any> = {
  add({ commit }) {
    commit("add", 1);
  },
  remove({ commit }) {
    commit("remove", 1);
  },
};

export const getters: GetterTree<State, any> = {
  count: ({ count }) => count,
};

export const mutations: MutationTree<State> = {
  add(state, value) {
    state.count += value;
  },
  remove(state, value) {
    state.count -= value;
  },
};

export const module: Module<State, any> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};

export default module;
