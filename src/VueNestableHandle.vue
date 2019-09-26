<template>
  <div
    draggable
    class="nestable-handle"
    @dragstart="dragstart"
    @touchstart="dragstart"
    @touchend="touchend"
    @touchmove="touchmove"
  >
    <slot />
  </div>
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
      const item = this.item || this.$parent.item
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
