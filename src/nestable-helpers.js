export default {
  methods: {
    // ––––––––––––––––––––––––––––––––––––
    // Getter methods
    // ––––––––––––––––––––––––––––––––––––
    getPathById (id, items = this.value) {
      let path = []

      items.every((item, i) => {
        if (item[this.keyProp] === id) {
          path.push(i)
        } else if (item[this.childrenProp]) {
          const childrenPath = this.getPathById(id, item[this.childrenProp])

          if (childrenPath.length) {
            path = path.concat(i).concat(childrenPath)
          }
        }

        return path.length === 0
      })

      return path
    },

    getItemByPath (path, items = this.value) {
      let item = null

      path.forEach(index => {
        const list = item && item[this.childrenProp] ? item[this.childrenProp] : items
        item = list[index]
      })

      return item
    },

    getItemDepth (item) {
      let level = 1

      if (item[this.childrenProp] && item[this.childrenProp].length > 0) {
        const childrenDepths = item[this.childrenProp].map(this.getItemDepth)
        level += Math.max(...childrenDepths)
      }

      return level
    },

    getSplicePath (path, options = {}) {
      const splicePath = {}
      const numToRemove = options.numToRemove || 0
      const itemsToInsert = options.itemsToInsert || []
      const lastIndex = path.length - 1
      let currentPath = splicePath

      path.forEach((index, i) => {
        if (i === lastIndex) {
          currentPath.$splice = [[index, numToRemove, ...itemsToInsert]]
        } else {
          const nextPath = {}
          currentPath[index] = { [options.childrenProp]: nextPath }
          currentPath = nextPath
        }
      })

      return splicePath
    },

    getRealNextPath (prevPath, nextPath) {
      const ppLastIndex = prevPath.length - 1
      const npLastIndex = nextPath.length - 1

      if (prevPath.length < nextPath.length) {
        // move into deep
        let wasShifted = false

        return nextPath.map((nextIndex, i) => {
          if (wasShifted) {
            return i === npLastIndex
              ? nextIndex + 1
              : nextIndex
          }

          if (typeof prevPath[i] !== 'number') {
            return nextIndex
          }

          if (nextPath[i] > prevPath[i] && i === ppLastIndex) {
            wasShifted = true
            return nextIndex - 1
          }

          return nextIndex
        })
      } else if (prevPath.length === nextPath.length) {
        // if move bottom + move to item with children => make it a first child instead of swap
        if (nextPath[npLastIndex] > prevPath[npLastIndex]) {
          const target = this.getItemByPath(nextPath)

          if (target[this.childrenProp] && target[this.childrenProp].length && !this.isCollapsed(target)) {
            return nextPath
              .slice(0, -1)
              .concat(nextPath[npLastIndex] - 1)
              .concat(0)
          }
        }
      }

      return nextPath
    }

    // getItemOptions() {
    //   const { renderItem, renderCollapseIcon, handler, childrenProp } = this.props;
    //   const { dragItem } = this.state;

    //   return {
    //     dragItem,
    //     childrenProp,
    //     renderItem,
    //     renderCollapseIcon,
    //     handler,

    //     onDragStart: this.onDragStart,
    //     onMouseEnter: this.onMouseEnter,
    //     isCollapsed: this.isCollapsed,
    //     onToggleCollapse: this.onToggleCollapse
    //   };
    // }

  }
}
