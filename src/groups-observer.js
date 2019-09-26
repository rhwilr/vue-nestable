const store = {}

export default {
  methods: {
    registerNestable (nestable) {
      const storeGroup = this._getByGroup(nestable.group)

      storeGroup.onDragStartListeners.push(nestable.onDragStart)
      storeGroup.onMouseEnterListeners.push(nestable.onMouseEnter)
      storeGroup.onMouseMoveListeners.push(nestable.onMouseMove)
    },

    notifyDragStart (group, event, item) {
      const storeGroup = this._getByGroup(group)

      for (const listener of storeGroup.onDragStartListeners) {
        listener(event, item)
      }
    },

    notifyMouseEnter (group, event, eventList, item) {
      const storeGroup = this._getByGroup(group)

      for (const listener of storeGroup.onMouseEnterListeners) {
        listener(event, eventList, item)
      }
    },

    notifyMouseMove (group, event) {
      const storeGroup = this._getByGroup(group)

      for (const listener of storeGroup.onMouseMoveListeners) {
        listener(event)
      }
    },

    _getByGroup (group) {
      // the group already exists, return the reference
      if (store[group]) {
        return store[group]
      }

      // otherwise create a new object for the group
      store[group] = {
        onDragStartListeners: [],
        onMouseEnterListeners: [],
        onMouseMoveListeners: [],
        onDragStart: [],
        dragItem: null
      }

      return store[group]
    }
  }
}
