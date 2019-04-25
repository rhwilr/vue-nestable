<template>
  <ComponentExample link="Advanced">
    <VueNestable
      v-model="nestableItems"
      :max-depth="2"
      :hooks="{
        'beforeMove': beforeMove
      }"
      key-prop="key"
      children-prop="nested"
      class-prop="class"
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
          class: 'purple-text-color',
          text: 'Andy'
        }, {
          key: 1,
          class: 'blue-text-color',
          text: 'Harry',
          nested: [{
            key: 2,
            text: 'David'
          }]
        }, {
          key: 3,
          class: 'red-text-color',
          text: 'Lisa'
        }, {
          key: 4,
          text: 'I can not be nested'
        }
      ]
    }
  },

  methods: {
    beforeMove ({ dragItem, pathFrom, pathTo }) {
      // Item 4 can not be nested more than one level
      if (dragItem.key === 4) {
        return pathTo.length === 1
      }

      // All other items can be
      return true
    }
  }
}
</script>

<style>
.blue-text-color {
  color: #415ad4;
}
.purple-text-color {
  color: #b43ceb;
}
.red-text-color {
  color: #e13a3a;
}
</style>
