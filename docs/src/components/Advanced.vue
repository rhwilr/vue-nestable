<template>
  <ComponentExample link="Advanced">
    <VueNestable
      v-model="nestableItems"
      :max-depth="2"
      key-prop="key"
      children-prop="nested"
    >
      <template slot-scope="{ item }">
        <!-- Handler -->
        <VueNestableHandle :item="item">
          <i class="fas fa-bars" />
        </VueNestableHandle>

        <!-- Content -->
        <span>Item :: {{ item.text }}</span>
      </template>
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
