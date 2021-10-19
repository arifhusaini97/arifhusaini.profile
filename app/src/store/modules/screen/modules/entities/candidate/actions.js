//index.js
import Repository from '@/repositories/RepositoryFactory';
const repository = Repository.get('candidates');
export default {
  getCandidatesRanked: async ({ commit }, { lazyParams }) => {
    var response = await repository.getCandidatesRanked(lazyParams);
    console.log(response.data.result);
    commit('SET_candidates_ranked', response.data.result);
  },

  getCandidatesFavorite: async ({ commit }, { lazyParams }) => {
    var response = await repository.getCandidatesFavorite(lazyParams);
    console.log(response.data.result);
    commit('SET_candidates_favorite', response.data.result);
  },

  getCandidatesSheet: async ({ commit }, { lazyParams }) => {
    var response = await repository.getCandidatesSheet(lazyParams);
    console.log(response.data.result);
    commit('SET_candidates_sheet', response.data.result);
  },

  getCategories: async ({ commit }, { lazyParams }) => {
    var response = await repository.getCategories(lazyParams);
    console.log(response.data.result);
    commit('SET_categories', response.data.result);
  },

  setFavorite: async ({ commit }, { payload }) => {
    commit('SET_favorite', payload);
  },

  setVote: async ({ commit }, { payload }) => {
    commit('SET_vote', payload);
  },
};
