class Helper {
  debug(message = 'test') {
    console.log(message);
  }
}
const GlobalHelper = {
  install(app) {
    app.config.globalProperties.helper = new Helper();
  },
};

export default GlobalHelper;
