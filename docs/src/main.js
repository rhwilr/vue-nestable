import Vue from 'vue'
import App from './App.vue'

import nestable from '../../src/nestable.vue'
import nestableHandle from '../../src/nestable-handle.vue'
import ScopedSlotsPolyfill from '../../lib/scoped-slots-polyfill'

Vue.component('vue-nestable', nestable)
Vue.component('vue-nestable-handle', nestableHandle)

/*
** Polyfill for passing down scopedSlots with v-bind
** https://github.com/vuejs/vue/pull/7765
*/
Vue.use(ScopedSlotsPolyfill)

new Vue({
  render: h => h(App)
}).$mount('#app')
