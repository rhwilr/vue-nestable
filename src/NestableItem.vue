<template>
  <li :class="itemClasses">
    <div
      class="nestable-item-content"
      @mouseenter="onMouseEnter"
      @mouseleave="onMouseLeave"
      @mousemove="onMouseMove"
    >
      <slot
        :index="index"
        :item="item"
        :isChild="isChild"
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
          :key="child[keyProp]"
          :item="child"
          :index="childIndex"
          :options="options"
          :is-copy="isCopy"
          is-child
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
    isChild: {
      type: Boolean,
      required: false,
      default: false
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

  inject: ['listId', 'group', 'keyProp'],

  data () {
    return {
      breakPoint: null,
      moveDown: false
    }
  },

  computed: {
    isDragging () {
      const dragItem = this.options.dragItem
      return !this.isCopy && dragItem && dragItem[this.options.keyProp] === this.item[this.options.keyProp]
    },

    hasChildren () {
      return this.item[this.options.childrenProp] && this.item[this.options.childrenProp].length > 0
    },

    hasHandle () {
      return !!this.$scopedSlots.handler
    },

    normalizedClassProp () {
      const classProp = this.item[this.options.classProp]

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
      const isDragging = this.isDragging ? ['is-dragging'] : []

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

      // if we don't know the direction the mouse is moving,
      // we can not calculate the offset at which we should trigger a swap
      // we we fallback to the old behavior
      if (!event.movementY) {
        return this.sendNotification(event)
      }

      // when the mouse enters the item we save the size of this item
      // is is to improve performance, so we do not recalculate the size on every move
      this.moveDown = event.movementY > 0

      this.breakPoint = event.target.getBoundingClientRect().height / 2
    },
    onMouseLeave () {
      this.breakPoint = null
    },
    onMouseMove (event) {
      // if we are not in a drag operation, we can discard the input
      if (!this.breakPoint) return

      // calculate how much the mouse is away from the center
      const delta = event.offsetY - this.breakPoint

      // if we have not reached the breakpoint, we can abort here
      if (this.moveDown && delta < this.breakPoint / 4) return
      if (!this.moveDown && delta > -this.breakPoint / 4) return

      this.sendNotification(event)
    },
    sendNotification (event) {
      // reset the calculated breakpoint
      this.breakPoint = null

      // and trigger the enter event
      const item = this.item || this.$parent.item
      this.notifyMouseEnter(this.group, event, this.listId, item)
    }
  }
}
</script>
