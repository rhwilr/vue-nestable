<template>
  <li :class="itemClasses">
    <div
      class="nestable-item-name"
      @mouseenter="onMouseEnter">

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
          >

          <!-- bind scoped slots to the netable-item component -->
          <template 
            v-for="slot in Object.keys($scopedSlots)" 
            :slot="slot" 
            slot-scope="scope">
            <slot 
              :name="slot"
              v-bind="scope"/>
          </template>

        </nestable-item>

      </template>
    </ol>
  </li>
</template>

<script type="text/babel">
import groupsObserver from './groups-observer.js'

export default {
  name: 'NestableItem',

  mixins: [groupsObserver],

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

  inject: ['listId', 'group'],

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
  },

  methods: {
    onMouseEnter (event) {
      if (!this.options.dragItem) return

      let item = this.item || this.$parent.item
      this.notifyMouseEnter(this.group, event, this.listId, item)
    }
  }
}
</script>
