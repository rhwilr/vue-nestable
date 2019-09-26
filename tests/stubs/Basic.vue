<template>
  <VueNestable
    v-model="nestableItems"
    class-prop="class"
  >
    <VueNestableHandle
      slot-scope="{ item, index }"
      :item="item"
    >
      {{ index }} - {{ item.text }}
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
          class: 'purple-text',
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
          class: ['purple-text', 'red-text'],
          text: 'Lisa'
        }
      ]
    }
  }
}
</script>
