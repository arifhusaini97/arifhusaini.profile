import screenMutations from './mutations.js';
import screenActions from './actions.js';
import screenGetters from './getters.js';
import candidateModule from './modules/entities/candidate/index.js';

export default {
  namespaced: true, // put true if want enable modules
  state: {
    navigation_list_items: [
      { name: 'podium', url: '/podium', active: false },
      { name: 'favourite', url: '/favourite', active: false },
      { name: 'vote', url: '/vote-center', active: false },
    ],
  },
  mutations: screenMutations,
  actions: screenActions,
  getters: screenGetters,
  modules: { candidate: candidateModule, components: {} },
};
