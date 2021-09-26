import { createApp } from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import GlobalHelper from '@/js/classes/helper';

let app = createApp(App);
app.use(store);
app.use(router);
app.use(GlobalHelper);
app.mount('#app');
