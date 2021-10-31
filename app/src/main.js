import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import GlobalHelper from '@/js/classes/helper';
import VeeValidatePlugin from './js/functions/validation';

let app = createApp(App);
app.use(store);
app.use(router);
app.use(GlobalHelper);
app.use(VeeValidatePlugin);
app.mount('#app');
