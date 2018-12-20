<template>
  <span
    draggable
    @dragstart="dragstart"
    @touchstart="dragstart"
    @touchend="touchend"
    @touchmove="touchmove"
  >
    <slot />
  </span>
</template>

<script type="text/babel">
import groupsObserver from './groups-observer.js'

export default {
  name: 'VueNestableHandle',

  mixins: [groupsObserver],

  props: {
    item: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },

  inject: ['group', 'onDragEnd'],

  methods: {
    dragstart (event) {
      let item = this.item || this.$parent.item
      this.notifyDragStart(this.group, event, item)
    },
    touchend (event) {
      this.onDragEnd(event)
    },
    touchmove (event) {
      this.notifyMouseMove(this.group, event)
    }
  }
}
</script>
