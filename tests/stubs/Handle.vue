<template>
  <VueNestable v-model="nestableItems">
    <template slot-scope="{ item }">
      <!-- Handler -->
      <VueNestableHandle :item="item">
        ::
      </VueNestableHandle>

      <!-- Content -->
      <span>{{ item.text }}</span>
    </template>
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
