import Vue from 'vue'
import Vuex from 'vuex'
import axios from 'axios';

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    mods: [],
    error: false,
    isLoading: false,
  },
  mutations: {
    setMods(state, payload) {
      state.mods = payload;
    },
    setLoading(state, isLoading) {
      state.isLoading = isLoading;
    },
    setError(state, error) {
      state.error = error
    }
  },
  actions: {
    getMods(context) {
      context.commit("setLoading", true);
      axios.get("/mock.json").then((res) => {
        context.commit("setLoading", false);
        context.commit("setMods", res.data);
      }).catch((e) => {
        context.commit("setLoading", false);
        context.commit("setError", e.message);
      })
    }
  }
})