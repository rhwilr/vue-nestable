<template>
  <ComponentExample link="Collapsable">
    <VueNestable
    expandable
    v-model="nestableItems">

      <VueNestableHandle
      slot-scope="{ item }" :item="item">
        <i class="fas fa-user" />
        {{ item.text }} <br>
      </VueNestableHandle>
    </VueNestable>
  </ComponentExample>
</template>

<script>
import ComponentExample from "./ComponentExample.vue";

export default {
  components: {
    ComponentExample
  },

  data() {
    return {
      nestableItems: [
        {
          id: 1,
          text:'Parent',
          expanded: false,
          children: [
            {
              id: 2,
              text:'First child',
              children: [],
              expanded: false,
            },
            {
              id: 3,
              text:'First child with children',
              expanded: false,
              children: [
                {
                  id: 4,
                  text:'First child',
                  children: [],
                  expanded: false,
                },
              ],
            },
          ],
        },
      ]
    };
  },
  methods: {

  }
};
</script>

<style scoped>
</style>
