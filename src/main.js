// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
import store from './vuex/store'
import BsFlex from './components/flex/bs-flex.vue'
import BsFlexItem from './components/flex/bs-flex-item.vue'

Vue.config.productionTip = false

Vue.use({
  install: function(Vue) {
    Vue.component('BsFlex', BsFlex)
    Vue.component('BsFlexItem', BsFlexItem)
  }
})

/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: '<App/>'
})
