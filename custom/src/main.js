import Vue from 'vue'
import App from './App.vue'

import element from 'element-ui'
import 'element-ui/lib/theme-default/index.css'

import routers from './router'

Vue.use(element)

new Vue({
  el: '#app',
  routers,
  template: '<App/>',
  components: { App }
})
