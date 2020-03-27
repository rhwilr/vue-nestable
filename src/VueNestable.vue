<template>
  <div :class="['nestable', `nestable-${group}`, rtl ? 'nestable-rtl' : '']">
    <ol class="nestable-list nestable-group">
      <!-- No items in list -->
      <Placeholder
        v-if="listIsEmpty"
        :options="itemOptions"
      >
        <slot name="placeholder">
          No content
        </slot>
      </Placeholder>

      <!-- Render items -->
      <template
        v-for="(item, index) in value"
      >
        <NestableItem
          :key="item[keyProp]"
          :index="index"
          :item="item"
          :options="itemOptions"
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

    <template v-if="dragItem">
      <div class="nestable-drag-layer">
        <ol
          :style="listStyles"
          class="nestable-list"
        >
          <NestableItem
            :item="dragItem"
            :options="itemOptions"
            :is-copy="true"
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
        </ol>
      </div>
    </template>
  </div>
</template>

<script type="text/babel">
import NestableItem from './NestableItem.vue'
import Placeholder from './Placeholder.vue'
import nestableHelpers from './nestable-helpers.js'
import groupsObserver from './groups-observer.js'
import callsHooks from './calls-hooks.js'
import update from 'immutability-helper'

import {
  closest,
  getOffsetRect,
  getTransformProps,
  listWithChildren
} from './utils.js'

export default {
  name: 'VueNestable',

  components: {
    NestableItem,
    Placeholder
  },

  mixins: [nestableHelpers, groupsObserver, callsHooks],

  props: {
    value: {
      type: Array,
      required: true,
      default: () => ([])
    },
    threshold: {
      type: Number,
      required: false,
      default: 30
    },
    maxDepth: {
      type: Number,
      required: false,
      default: 10
    },
    keyProp: {
      type: String,
      required: false,
      default: 'id'
    },
    classProp: {
      type: String,
      required: false,
      default: null
    },
    group: {
      type: [String, Number],
      required: false,
      default: () => Math.random().toString(36).slice(2)
    },
    childrenProp: {
      type: String,
      required: false,
      default: 'children'
    },
    collapsed: {
      type: Boolean,
      required: false,
      default: false
    },
    hooks: {
      type: Object,
      required: false,
      default: () => ({})
    },
    rtl: {
      type: Boolean,
      required: false,
      default: false
    }
  },

  provide () {
    return {
      listId: this.listId,
      group: this.group,
      keyProp: this.keyProp,
      onDragEnd: this.onDragEnd
    }
  },

  data () {
    return {
      itemsOld: null, // revert to copy in case of cancelling drag
      dragItem: null,
      mouse: {
        last: { x: 0 },
        shift: { x: 0 }
      },
      el: null,
      elCopyStyles: null,
      isDirty: false,
      collapsedGroups: [],
      listId: Math.random().toString(36).slice(2)
    }
  },

  computed: {
    listIsEmpty () {
      return this.value.length === 0
    },
    itemOptions () {
      return {
        dragItem: this.dragItem,
        keyProp: this.keyProp,
        classProp: this.classProp,
        childrenProp: this.childrenProp
      }
    },
    listStyles () {
      const el = document.querySelector('.nestable-' + this.group + ' .nestable-item-' + this.dragItem[this.keyProp])

      let listStyles = {}

      if (el) {
        listStyles.width = `${el.clientWidth}px`
      }

      if (this.elCopyStyles) {
        listStyles = {
          ...listStyles,
          ...this.elCopyStyles
        }
      }

      return listStyles
    }
  },

  created () {
    const items = listWithChildren(this.value, this.childrenProp)
    this.$emit('input', items)
    this.isDirty = false

    this.registerNestable(this)
  },

  beforeDestroy () {
    this.stopTrackMouse()
  },

  methods: {
    startTrackMouse () {
      document.addEventListener('mousemove', this.onMouseMove)
      document.addEventListener('mouseup', this.onDragEnd)
      document.addEventListener('touchend', this.onDragEnd)
      document.addEventListener('touchcancel', this.onDragEnd)
      document.addEventListener('keydown', this.onKeyDown)
    },

    stopTrackMouse () {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onDragEnd)
      document.removeEventListener('touchend', this.onDragEnd)
      document.removeEventListener('touchcancel', this.onDragEnd)
      document.removeEventListener('keydown', this.onKeyDown)
      this.elCopyStyles = null
    },

    onDragStart (event, item) {
      if (event) {
        event.preventDefault()
        event.stopPropagation()
      }

      this.el = closest(event.target, '.nestable-item')

      this.startTrackMouse()

      this.dragItem = item
      this.itemsOld = this.value

      // Trigger a mouseMove event to update the ghost item with the mouse
      // position
      this.$nextTick(() => {
        this.onMouseMove(event)
      })
    },

    onDragEnd (event, isCancel) {
      event && event.preventDefault()

      this.stopTrackMouse()
      this.el = null

      isCancel
        ? this.dragRevert()
        : this.dragApply()
    },

    onKeyDown (event) {
      if (event.which === 27) {
        // ESC
        this.onDragEnd(null, true)
      }
    },

    getXandYFromEvent (event) {
      let { clientX, clientY } = event

      // get touch event
      const { targetTouches } = event

      // if there is a touch event, use this
      if (targetTouches) {
        const touch = targetTouches[0]
        clientX = touch.clientX
        clientY = touch.clientY

        // we rely on the mouseenter event to track if a node should be moved
        // since this event does not exist, we need to simulate it.
        const event = new Event('mouseenter')
        const element = document.elementFromPoint(clientX, clientY)
        const touchElement = element && (element.closest('.nestable-item-content') || element.closest('.nestable-list-empty'))
        if (touchElement) touchElement.dispatchEvent(event)
      }

      return { clientX, clientY }
    },

    onMouseMove (event) {
      event && event.preventDefault()

      const { clientX, clientY } = this.getXandYFromEvent(event)

      // initialize the initial mouse positoin on the first drag operation
      if (this.mouse.last.x === 0) {
        this.mouse.last.x = clientX
      }

      const transformProps = getTransformProps(clientX, clientY)

      // In some cases the drag-layer might not be at the top left of the window,
      // we need to find, where it acually is, and incorperate the position into the calculation.
      const elDragLayer = document.querySelector('.nestable-' + this.group + ' .nestable-drag-layer')
      if (!elDragLayer) return
      const { top: dragLayerTop, left: dragLayerLeft } = elDragLayer.getBoundingClientRect()

      const elCopy = document.querySelector('.nestable-' + this.group + ' .nestable-drag-layer > .nestable-list')

      if (!this.elCopyStyles) {
        const offset = getOffsetRect(this.el)

        this.elCopyStyles = {
          marginTop: `${offset.top - clientY - dragLayerTop}px`,
          marginLeft: `${offset.left - clientX - dragLayerLeft}px`,
          ...transformProps
        }
      } else {
        this.elCopyStyles = {
          ...this.elCopyStyles,
          ...transformProps
        }

        if (elCopy) {
          for (const key in transformProps) {
            if (Object.prototype.hasOwnProperty.call(transformProps, key)) {
              elCopy.style[key] = transformProps[key]
            }
          }
        }

        const diffX = this.rtl ? this.mouse.last.x - clientX : clientX - this.mouse.last.x
        if (
          (diffX >= 0 && this.mouse.shift.x >= 0) ||
          (diffX <= 0 && this.mouse.shift.x <= 0)
        ) {
          this.mouse.shift.x += diffX
        } else {
          this.mouse.shift.x = 0
        }
        this.mouse.last.x = clientX

        if (Math.abs(this.mouse.shift.x) > this.threshold) {
          if (this.mouse.shift.x > 0) {
            this.tryIncreaseDepth(this.dragItem)
          } else {
            this.tryDecreaseDepth(this.dragItem)
          }

          this.mouse.shift.x = 0
        }
      }
    },

    moveItem ({ dragItem, pathFrom, pathTo }) {
      // the remove action might affect the next position,
      // so update next coordinates accordingly
      const realPathTo = this.getRealNextPath(pathFrom, pathTo)

      const removePath = this.getSplicePath(pathFrom, {
        numToRemove: 1,
        childrenProp: this.childrenProp
      })

      const insertPath = this.getSplicePath(realPathTo, {
        numToRemove: 0,
        itemsToInsert: [dragItem],
        childrenProp: this.childrenProp
      })

      if (!this.hook('beforeMove', { dragItem, pathFrom, pathTo: realPathTo })) return

      let items = this.value

      items = update(items, removePath)
      items = update(items, insertPath)

      this.isDirty = true
      this.pathTo = realPathTo
      this.$emit('input', items)
    },

    tryIncreaseDepth (dragItem) {
      const pathFrom = this.getPathById(dragItem[this.keyProp])
      const itemIndex = pathFrom[pathFrom.length - 1]
      const newDepth = pathFrom.length + this.getItemDepth(dragItem)

      // has previous sibling and isn't at max depth
      if (itemIndex > 0 && newDepth <= this.maxDepth) {
        const prevSibling = this.getItemByPath(pathFrom.slice(0, -1).concat(itemIndex - 1))

        // previous sibling is not collapsed
        if (prevSibling[this.childrenProp] && (!prevSibling[this.childrenProp].length || !this.isCollapsed(prevSibling))) {
          const pathTo = pathFrom
            .slice(0, -1)
            .concat(itemIndex - 1)
            .concat(prevSibling[this.childrenProp].length)

          // if collapsed by default
          // and was no children here
          // open this node
          // let collapseProps = {};
          // if (collapsed && !prevSibling[this.childrenProp].length) {
          //   collapseProps = this.onToggleCollapse(prevSibling, true);
          // }

          // this.moveItem({ dragItem, pathFrom, pathTo }, collapseProps)
          this.moveItem({ dragItem, pathFrom, pathTo })
        }
      }
    },

    tryDecreaseDepth (dragItem) {
      const pathFrom = this.getPathById(dragItem[this.keyProp])
      const itemIndex = pathFrom[pathFrom.length - 1]

      // has parent
      if (pathFrom.length > 1) {
        const parent = this.getItemByPath(pathFrom.slice(0, -1))

        // is last (by order) item in array
        if (itemIndex + 1 === parent[this.childrenProp].length) {
          const pathTo = pathFrom.slice(0, -1)
          pathTo[pathTo.length - 1] += 1

          // if collapsed by default
          // and is last (by count) item in array
          // remove this node from list of open nodes
          // let collapseProps = {};
          // if (collapsed && parent[this.childrenProp].length == 1) {
          //   collapseProps = this.onToggleCollapse(parent, true);
          // }

          // this.moveItem({ dragItem, pathFrom, pathTo }, collapseProps)
          this.moveItem({ dragItem, pathFrom, pathTo })
        }
      }
    },

    onMouseEnter (event, eventList, item) {
      if (event) {
        event.preventDefault()
        event.stopPropagation()
      }

      const dragItem = this.dragItem

      // In some cases, this event fires after the drag operation was already
      // completed, in which case we can ignore it
      if (!dragItem) return

      // if the event does not have a valid item that belongs to this list, ignore it
      if (item !== null && dragItem[this.keyProp] === item[this.keyProp]) return

      // calculate the path the item is comming from
      const pathFrom = this.getPathById(dragItem[this.keyProp])

      // if the event is not emitted from this list and the item was not removed from this list,
      // we can ignore this event
      if (eventList !== this.listId && pathFrom.length === 0) return

      let pathTo
      // if we are dragging to an empty list, we need to remove
      // the item from the origin list and append it to the start of the new list
      if (item === null) {
        pathTo = pathFrom.length > 0 ? [] : [0]
      } else {
        pathTo = this.getPathById(item[this.keyProp])
      }

      // if the move to the new depth is greater than max depth,
      // don't move
      const newDepth = this.getRealNextPath(pathFrom, pathTo).length + (this.getItemDepth(dragItem) - 1)
      if (newDepth > this.maxDepth) {
        return
      }

      // if collapsed by default
      // and move last (by count) child
      // remove parent node from list of open nodes
      let collapseProps = {}
      if (this.collapsed && pathFrom.length > 1) {
        const parent = this.getItemByPath(pathFrom.slice(0, -1))

        if (parent[this.childrenProp].length === 1) {
          collapseProps = this.onToggleCollapse(parent, true)
        }
      }

      this.moveItem({ dragItem, pathFrom, pathTo }, collapseProps)
    },

    isCollapsed (item) {
      return !!((this.collapsedGroups.indexOf(item[this.keyProp]) > -1) ^ this.collapsed)
    },

    dragApply () {
      this.$emit('change', this.dragItem, { items: this.value, pathTo: this.pathTo })

      this.pathTo = null
      this.itemsOld = null
      this.dragItem = null
      this.isDirty = false
    },

    dragRevert () {
      this.$emit('input', this.itemsOld)

      this.pathTo = null
      this.itemsOld = null
      this.dragItem = null
      this.isDirty = false
    }
  }
}
</script>
