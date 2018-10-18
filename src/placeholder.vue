<template>
  <li>
    <div
      class="nestable-list-empty"
      @mouseenter="onMouseEnter">
      <slot/>
    </div>
  </li>
</template>

<script type="text/babel">
import groupsObserver from './groups-observer.js'

export default {
  name: 'NestableItem',

  mixins: [groupsObserver],

  props: {
    index: {
      type: Number,
      required: false,
      default: null
    },
    options: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },

  inject: ['group'],

  computed: {
    isDragging () {
      let dragItem = this.options.dragItem
      return dragItem
    }
  },

  methods: {
    onMouseEnter (event) {
      if (!this.options.dragItem) return

      this.notifyMouseEnter(this.group, event, null)
    }
  }
}
</script>
