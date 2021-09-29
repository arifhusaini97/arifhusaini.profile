export default {
  async activateNavigation(context, payload) {
    context.commit('activateNavigation', payload); //commit will call mutation name
  },
};
