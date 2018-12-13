<template>
  <vue-nestable v-model="nestableItems">
    <vue-nestable-handle
      slot-scope="{ item }"
      :item="item">
      {{ item.text }}
    </vue-nestable-handle>
  </vue-nestable>
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
