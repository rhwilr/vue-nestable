<template>
  <ComponentExample link="NoItems">
    <VueNestable
      v-model="nestableItems1"
      cross-list
      group="cross"
    >
      <div slot="placeholder">
        <b>This list is empty</b>
        <p>You can add items by dragging them here from the list above.</p>
      </div>

      <VueNestableHandle
        slot-scope="{ item }"
        :item="item"
      >
        {{ item.text }}
      </VueNestableHandle>
    </VueNestable>
  </ComponentExample>
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
