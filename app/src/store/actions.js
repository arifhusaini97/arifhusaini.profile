import Repository from '../repositories/RepositoryFactory';
const repository = Repository.get('user');
export default {
  logout: ({ commit }) => {
    commit('SET_logout');
  },
  login({ commit }) {
    commit('SET_login');
  },
  getUser: async ({ commit }, { payload }) => {
    var response = await repository.getUser(payload);
    commit('SET_user', response.data.result);
  },
};
