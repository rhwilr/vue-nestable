<template>
  <div :class="['nestable', `nestable-${group}`]">
    <ol class="nestable-list nestable-group">
      <template
        v-for="(item, index) in value">

        <nestable-item
          :key="index"
          :index="index"
          :item="item"
          :options="itemOptions"
          v-bind="{$scopedSlots}"/>

      </template>
    </ol>

    <template v-if="dragItem">

      <div class="nestable-drag-layer">
        <ol
          :style="listStyles"
          class="nestable-list">

          <nestable-item
            :item="dragItem"
            :options="itemOptions"
            :is-copy="true"
            v-bind="{$scopedSlots}"/>

        </ol>
      </div>

    </template>
  </div>
</template>

<script type="text/babel">
import nestableItem from './nestable-item.vue'
import nestableHelpers from './nestable-helpers.js'
import groupsObserver from './groups-observer.js'
import update from 'immutability-helper'

import {
  closest,
  getOffsetRect,
  getTotalScroll,
  getTransformProps,
  listWithChildren
} from './utils.js'

export default {
  components: {
    nestableItem
  },

  mixins: [nestableHelpers, groupsObserver],

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
    }
  },

  provide () {
    return {
      group: this.group,
      childrenProp: this.childrenProp
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
      collapsedGroups: []
    }
  },

  computed: {
    itemOptions () {
      return {
        dragItem: this.dragItem,
        childrenProp: this.childrenProp
      }
    },
    listStyles () {
      const el = document.querySelector('.nestable-' + this.group + ' .nestable-item-' + this.dragItem.id)

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
    let items = listWithChildren(this.value, this.childrenProp)
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
      document.addEventListener('keydown', this.onKeyDown)
    },

    stopTrackMouse () {
      document.removeEventListener('mousemove', this.onMouseMove)
      document.removeEventListener('mouseup', this.onDragEnd)
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

    onMouseMove (event) {
      const { clientX, clientY } = event
      const transformProps = getTransformProps(clientX, clientY)
      const elCopy = document.querySelector('.nestable-' + this.group + ' .nestable-drag-layer > .nestable-list')

      if (!this.elCopyStyles) {
        const offset = getOffsetRect(this.el)
        const scroll = getTotalScroll(this.el)

        this.elCopyStyles = {
          marginTop: `${offset.top - clientY - scroll.top}px`,
          marginLeft: `${offset.left - clientX - scroll.left}px`,
          ...transformProps
        }
      } else {
        this.elCopyStyles = {
          ...this.elCopyStyles,
          ...transformProps
        }

        for (let key in transformProps) {
          if (transformProps.hasOwnProperty(key)) {
            elCopy.style[key] = transformProps[key]
          }
        }

        const diffX = clientX - this.mouse.last.x
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

      let items = this.value

      items = update(items, removePath)
      items = update(items, insertPath)

      this.isDirty = true
      this.$emit('input', items)
    },

    tryIncreaseDepth (dragItem) {
      const pathFrom = this.getPathById(dragItem.id)
      const itemIndex = pathFrom[pathFrom.length - 1]
      const newDepth = pathFrom.length + this.getItemDepth(dragItem)

      // has previous sibling and isn't at max depth
      if (itemIndex > 0 && newDepth <= this.maxDepth) {
        const prevSibling = this.getItemByPath(pathFrom.slice(0, -1).concat(itemIndex - 1))

        // previous sibling is not collapsed
        if (!prevSibling[this.childrenProp].length || !this.isCollapsed(prevSibling)) {
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
      const pathFrom = this.getPathById(dragItem.id)
      const itemIndex = pathFrom[pathFrom.length - 1]

      // has parent
      if (pathFrom.length > 1) {
        const parent = this.getItemByPath(pathFrom.slice(0, -1))

        // is last (by order) item in array
        if (itemIndex + 1 === parent[this.childrenProp].length) {
          let pathTo = pathFrom.slice(0, -1)
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

    onMouseEnter (event, item) {
      if (event) {
        event.preventDefault()
        event.stopPropagation()
      }

      const dragItem = this.dragItem
      if (dragItem.id === item.id) return

      const pathFrom = this.getPathById(dragItem.id)
      const pathTo = this.getPathById(item.id)

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
      return !!((this.collapsedGroups.indexOf(item.id) > -1) ^ this.collapsed)
    },

    dragApply () {
      this.$emit('change', this.dragItem)

      this.itemsOld = null
      this.dragItem = null
      this.isDirty = false
    },

    dragRevert () {
      this.$emit('input', this.itemsOld)

      this.itemsOld = null
      this.dragItem = null
      this.isDirty = false
    }
  }
}
</script>
