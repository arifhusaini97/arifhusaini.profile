import { createStore } from 'vuex';
import screenMutations from './mutations.js';
import screenActions from './actions.js';
import screenGetters from './getters.js';
import screenModule from './modules/screen/index.js';

export default createStore({
  state: {
    session: {
      is_logged_in: false,
    },
  },
  mutations: screenMutations,
  actions: screenActions,
  getters: screenGetters,
  modules: { screen: screenModule },
});
