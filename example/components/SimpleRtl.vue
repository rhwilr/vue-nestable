<template>
  <ComponentExample link="SimpleRtl">
    <VueNestable
      v-model="nestableItems"
      rtl
    >
      <VueNestableHandle
        slot-scope="{ item }"
        :item="item"
      >
        <i class="fas fa-user" />
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
      nestableItems: [
        {
          id: 0,
          text: 'Andy'
        }, {
          id: 1,
          text: 'Harry',
          children: [{
            id: 2,
            text: 'David'
          }]
        }, {
          id: 3,
          text: 'Lisa'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
