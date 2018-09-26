<template>
  <li :class="itemClasses">
    <div
      class="nestable-item-name"
      @mouseenter="options.dragItem ? options.onMouseEnter($event, item) : null">

      <slot :item="item"/>
    </div>

    <ol
      v-if="hasChildren"
      class="nestable-list">
      <template
        v-for="(item, index) in item[options.childrenProp]">

        <nestable-item
          :key="index"
          :index="index"
          :item="item"
          :options="options"
          :is-copy="isCopy"
          v-bind="{$scopedSlots}"
        />

      </template>
    </ol>
  </li>
</template>

<script type="text/babel">
export default {
  name: 'NestableItem',

  props: {
    item: {
      type: Object,
      required: true,
      default: () => ({}),
      validator (value) {
        // The item must have an id prop
        return value.id !== undefined
      }
    },
    index: {
      type: Number,
      required: false,
      default: null
    },
    isCopy: {
      type: Boolean,
      required: false,
      default: false
    },
    options: {
      type: Object,
      required: false,
      default: () => ({})
    }
  },

  computed: {
    isDragging () {
      let dragItem = this.options.dragItem
      return !this.isCopy && dragItem && dragItem.id === this.item.id
    },

    hasChildren () {
      return this.item[this.options.childrenProp] && this.item[this.options.childrenProp].length > 0
    },

    hasHandle () {
      return !!this.$scopedSlots.handler
    },

    itemClasses () {
      return [
        `nestable-item${this.isCopy ? '-copy' : ''}`,
        `nestable-item${this.isCopy ? '-copy' : ''}-${this.item.id}`,
        this.isDragging ? 'is-dragging' : ''
      ]
    }
  }
}
</script>
