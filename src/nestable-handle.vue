<template>
  <span
    draggable
    @dragstart="dragstart"
  >
    <slot />
  </span>
</template>

<script type="text/babel">
import groupsObserver from './groups-observer.js'

export default {
  mixins: [groupsObserver],

  props: {
    item: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },

  inject: ['group'],

  methods: {
    dragstart (event) {
      let item = this.item || this.$parent.item
      this.notifyDragStart(this.group, event, item)
    }
  }
}
</script>
