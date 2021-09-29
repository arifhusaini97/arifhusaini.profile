export default {
  activateNavigation(state, payload) {
    state.navigation_list_items.forEach((item) => {
      if (item.active === true) {
        return (item.active = false);
      }
    });

    if (payload.index) {
      state.navigation_list_items[payload.index].active = true;
    } else if (payload.path) {
      var item = state.navigation_list_items.find(
        (x) => x.url === payload.path,
      );
      if (item) {
        item.active = true;
      } else {
        console.log('This path is not from state.navigation_list_items');
      }
    }
  },
};
