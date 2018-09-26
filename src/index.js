import nestable from './nestable.vue'
import nestableHandle from './nestable-handle.vue'

module.exports = {
  install: function (Vue, options) {
    Vue.component('vue-nestable', nestable)
    Vue.component('vue-nestable-handle', nestableHandle)
  }
}
