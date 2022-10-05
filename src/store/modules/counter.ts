import { ActionTree, GetterTree, Module, MutationTree } from "vuex";

export interface State {
  count: number;
}

const state: State = {
  count: 0,
};

const actions: ActionTree<State, any> = {
  add({ commit }) {
    commit("add", 1);
  },
  remove({ commit }) {
    commit("remove", 1);
  },
};

const getters: GetterTree<State, any> = {
  count: ({ count }) => count,
};

const mutations: MutationTree<State> = {
  add(state, value) {
    state.count += value;
  },
  remove(state, value) {
    state.count -= value;
  },
};

const namespaced = true;

export const module: Module<State, any> = { namespaced, state, getters, mutations, actions };

export default module;
