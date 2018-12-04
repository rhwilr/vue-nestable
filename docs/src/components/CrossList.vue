<template>
  <div class="side-by-side">
    <div class="component-example">

      <vue-nestable
        v-model="nestableItems1"
        cross-list
        group="cross">
        <vue-nestable-handle
          slot-scope="{ item }"
          :item="item">
          {{ item.text }}
        </vue-nestable-handle>
      </vue-nestable>

    </div>
    <div class="component-example">

      <vue-nestable
        v-model="nestableItems2"
        cross-list
        group="cross">
        <vue-nestable-handle
          slot-scope="{ item }"
          :item="item">
          {{ item.text }}
        </vue-nestable-handle>
      </vue-nestable>

    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      nestableItems1: [
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
      ],
      nestableItems2: [
        {
          id: 4,
          text: 'Mike'
        }, {
          id: 5,
          text: 'Edgar'
        }
      ]
    }
  }
}
</script>

<style scoped>
</style>
