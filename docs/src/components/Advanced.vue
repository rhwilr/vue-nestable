<template>
  <div class="component-example">

    <vue-nestable
      v-model="nestableItems"
      :max-depth="2">
      <template slot-scope="{ item }">
        <!-- Handler -->
        <vue-nestable-handle :item="item">
          ☰
        </vue-nestable-handle>

        <!-- Content -->
        <span>Item :: {{ item.text }}</span>
      </template>
    </vue-nestable>

  </div>
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

<style scoped>
</style>
