<template>
  <VueNestable v-model="nestableItems">
    <VueNestableHandle
      slot-scope="{ item }"
      :item="item"
    >
      {{ item.text }}
    </VueNestableHandle>
  </VueNestable>
</template>

<script>
export default {
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
