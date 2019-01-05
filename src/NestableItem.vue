<template>
  <li :class="itemClasses">
    <div
      class="nestable-item-content"
      @mouseenter="onMouseEnter"
    >
      <slot
        :index="index"
        :item="item"
      />
    </div>

    <ol
      v-if="hasChildren"
      class="nestable-list"
    >
      <template
        v-for="(child, childIndex) in item[options.childrenProp]"
      >
        <NestableItem
          :key="childIndex"
          :index="childIndex"
          :item="child"
          :options="options"
          :is-copy="isCopy"
        >
          <!-- bind scoped slots to the netable-item component -->
          <template
            v-for="slot in Object.keys($scopedSlots)"
            :slot="slot"
            slot-scope="scope"
          >
            <slot
              :name="slot"
              v-bind="scope"
            />
          </template>
        </NestableItem>
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
      default: () => ({})
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
      required: true,
      default: () => ({})
    }
  },

  inject: ['listId', 'group'],

  computed: {
    isDragging () {
      let dragItem = this.options.dragItem
      return !this.isCopy && dragItem && dragItem[this.options.keyProp] === this.item[this.options.keyProp]
    },

    hasChildren () {
      return this.item[this.options.childrenProp] && this.item[this.options.childrenProp].length > 0
    },

    hasHandle () {
      return !!this.$scopedSlots.handler
    },

    normalizedClassProp () {
      let classProp = this.item[this.options.classProp]

      // if the classprop is not set, return an empty array
      if (!classProp) return []

      if (Array.isArray(classProp)) {
        return classProp
      } else if (typeof a === 'object') {
        return [classProp]
      } else {
        // String value
        return [classProp]
      }
    },

    itemClasses () {
      let isDragging = this.isDragging ? ['is-dragging'] : []

      return [
        `nestable-item${this.isCopy ? '-copy' : ''}`,
        `nestable-item${this.isCopy ? '-copy' : ''}-${this.item[this.options.keyProp]}`,
        ...isDragging,
        ...this.normalizedClassProp
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
