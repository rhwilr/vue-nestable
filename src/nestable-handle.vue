<template>
  <span
    draggable
    @dragstart="dragstart">
    <slot/>
  </span>
</template>

<script type="text/babel">
export default {
  props: {
    item: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },

  inject: ['onDragStart'],

  methods: {
    dragstart (event) {
      let item = this.item || this.$parent.item
      this.onDragStart(event, item)
    }
  }
}
</script>
