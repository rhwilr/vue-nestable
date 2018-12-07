<template>
  <component-example link="NoItems">

    <vue-nestable
      v-model="nestableItems1"
      cross-list
      group="cross">

      <div slot="placeholder">
        <b>This list is empty</b>
        <p>You can add items by dragging them here from the list above.</p>
      </div>

      <vue-nestable-handle
        slot-scope="{ item }"
        :item="item">
        {{ item.text }}
      </vue-nestable-handle>

    </vue-nestable>

  </component-example>
</template>

<script>
import ComponentExample from './ComponentExample.vue'

export default {
  components: {
    ComponentExample
  },

  data () {
    return {
      nestableItems1: [
      ]
    }
  }
}
</script>

<style scoped>
</style>
