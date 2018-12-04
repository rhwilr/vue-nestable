import Vue from 'vue'
import App from './App.vue'

import nestable from '../../src/nestable.vue'
import nestableHandle from '../../src/nestable-handle.vue'

Vue.component('vue-nestable', nestable)
Vue.component('vue-nestable-handle', nestableHandle)

new Vue({
  render: h => h(App)
}).$mount('#app')
