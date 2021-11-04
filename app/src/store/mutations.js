export default {
  SET_login: (state) => {
    state.session.is_logged_in = true;
  },
  SET_logout: (state) => {
    state.session.is_logged_in = false;

    // console.log(state);
    // state.screen.candidate.filters = {
    //   category: null,
    //   sub_category: null,
    //   topic: null,
    // };
    // localStorage.removeItem('filters');
  },
  SET_user: (state, result) => {
    state.user = result;
  },
};
