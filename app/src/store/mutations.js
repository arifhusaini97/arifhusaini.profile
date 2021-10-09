export default {
  SET_logout: (state) => {
    state.session.is_logged_in = false;
    console.log(state.session.is_logged_in);
  },
};
