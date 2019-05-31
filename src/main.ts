import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

import * as Sentry from '@sentry/browser';
import * as Integrations from '@sentry/integrations';

Vue.config.productionTip = false;

Sentry.init({
  dsn: 'https://22553bd0e4cf47d487248ac2547e8047@sentry.io/1379644',
  integrations: [new Integrations.Vue({Vue, attachProps: true})],
  environment: process.env.NODE_ENV,
  release: process.env.VERSION,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
