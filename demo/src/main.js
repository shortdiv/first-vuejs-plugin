import Vue from 'vue'
import App from './App'
import Test from '../../dist/example-plugin.common.js'

Vue.use(Test)

Vue.config.productionTip = false

/* eslint-disable no-new */
new Vue({
  el: '#app',
  template: '<App />',
  components: { App }
})
