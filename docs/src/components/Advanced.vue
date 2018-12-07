<template>
  <component-example link="Advanced">

    <vue-nestable
      v-model="nestableItems"
      :max-depth="2"
      key-prop="key"
      children-prop="nested">
      <template slot-scope="{ item }">
        <!-- Handler -->
        <vue-nestable-handle :item="item">
          <i class="fas fa-bars"/>
        </vue-nestable-handle>

        <!-- Content -->
        <span>Item :: {{ item.text }}</span>
      </template>
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
      nestableItems: [
        {
          key: 0,
          text: 'Andy'
        }, {
          key: 1,
          text: 'Harry',
          nested: [{
            key: 2,
            text: 'David'
          }]
        }, {
          key: 3,
          text: 'Lisa'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
