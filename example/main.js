import Vue from 'vue'
import App from './App.vue'

import VueNestable from '../src/VueNestable.vue'
import VueNestableHandle from '../src/VueNestableHandle.vue'

Vue.component('VueNestable', VueNestable)
Vue.component('VueNestableHandle', VueNestableHandle)

new Vue({
  render: h => h(App)
}).$mount('#app')
