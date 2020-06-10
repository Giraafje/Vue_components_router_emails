import Vue from 'vue';
import VueRouter from 'vue-router'
import Inbox from './components/Inbox.vue';
import App from './components/App';
import './index.html';

Vue.use(VueRouter);

const router = new VueRouter({
  mode: 'history',
  routes: [
    { path: '/inbox', component: Inbox },
    { path: '/inbox/:count', component: Inbox },
  ],
});

new Vue({
  el: '#app',
  router: router,
  render: h => h(App),
});