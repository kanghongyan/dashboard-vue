import Vue from 'vue'
import VueRouter from 'vue-router'
import VueResource from 'vue-resource'

import RouterConfig from './router'
import App from './App'

import loading from './directives/loading'

Vue.use(VueRouter);
Vue.use(VueResource);

const router = new VueRouter({
  hashbang: true,
  history: false,
  saveScrollPosition: true,
  suppressTransitionError: true
});

RouterConfig(router);

//Resource
//Todo:resource

//Directive
//todo: directive
Vue.directive('loading', loading);

//Filters
//todo: filters

router.start(App, '#app');

window.router = router;
