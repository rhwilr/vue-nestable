<template>
  <div class="component-example">

    <vue-nestable
      v-model="nestableItems1"
      cross-list
      group="cross">

      <div slot="placeholder">
        <h2>This list is empty</h2>
        <p>You can add items by dragging them here from the list above.</p>
      </div>

      <vue-nestable-handle
        slot-scope="{ item }"
        :item="item">
        {{ item.text }}
      </vue-nestable-handle>

    </vue-nestable>

  </div>
</template>

<script>
export default {
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
