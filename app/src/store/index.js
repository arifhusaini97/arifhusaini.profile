import { createStore } from 'vuex';
import screenModule from './modules/screen/index.js';

export default createStore({
  state: {},
  mutations: {},
  actions: {},
  modules: { screen: screenModule },
});
