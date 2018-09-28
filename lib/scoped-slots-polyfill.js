export default {
  install: function (Vue, options) {
    Vue.prototype._b = (function (bind) {
      return function (data, tag, value, asProp, isSync) {
        if (value && value.$scopedSlots) {
          data.scopedSlots = value.$scopedSlots
          delete value.$scopedSlots
        }

        return bind.apply(this, arguments)
      }
    })(Vue.prototype._b)
  }
}
