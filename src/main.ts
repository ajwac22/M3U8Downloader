import { createApp } from 'vue';
import { router } from '@/router';
import { pinia } from '@/store';
import '@/assets/styles/index.css';
import App from '@/App.vue';
import 'vue-global-api';

createApp(App)
  .use(router)
  .use(pinia)
  .mount('#app')
  .$nextTick(() => {
    postMessage({ payload: 'removeLoading' }, '*');
  });
