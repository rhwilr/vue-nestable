import nestable from './nestable.vue'
import nestableHandle from './nestable-handle.vue'

// export named components
export {
  nestable as Nestable,
  nestableHandle as NestableHandle
}

// export vue component installer
export default {
  install: function (Vue, options) {
    Vue.component('vue-nestable', nestable)
    Vue.component('vue-nestable-handle', nestableHandle)
  }
}
