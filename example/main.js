import Vue from 'vue'
import App from './App.vue'
import { VueNestable, VueNestableHandle } from '../src/index'

Vue.component('VueNestable', VueNestable)
Vue.component('VueNestableHandle', VueNestableHandle)

new Vue({
  render: h => h(App)
}).$mount('#app')
