import screenMutations from './mutations.js';
import screenActions from './actions.js';
import screenGetters from './getters.js';

export default {
  namespaced: true, // put true if want enable modules
  state() {
    return {
      navigation_list_items: [
        { name: 'podium', url: '/podium', active: false },
        { name: 'favourite', url: '/favourite', active: false },
        { name: 'vote', url: '/vote-center', active: false },
      ],
    };
  },
  mutations: screenMutations,
  actions: screenActions,
  getters: screenGetters,
};
