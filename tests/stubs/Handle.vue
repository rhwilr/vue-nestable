<template>
  <VueNestable v-model="nestableItems">
    <VueNestableHandle
      slot-scope="{ item }"
      :item="item"
    >
      Handle
    </VueNestableHandle>

    {{ item.text }}
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
