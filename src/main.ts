import Vue from 'vue';
import App from './App.vue';
import * as Nimiq from './nimiq.js';

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
}).$mount('#app');

// tslint:disable-next-line:no-console
console.log(Nimiq);
