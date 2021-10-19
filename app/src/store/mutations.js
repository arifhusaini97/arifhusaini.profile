export default {
  SET_login: (state) => {
    state.session.is_logged_in = true;
  },
  SET_logout: (state) => {
    state.session.is_logged_in = false;
  },
  SET_user: (state, result) => {
    state.user = result;
  },
};
