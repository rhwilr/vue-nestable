<template>
  <ComponentExample link="AddItem">
    <VueNestable v-model="nestableItems">
      <VueNestableHandle slot-scope="{ item }" :item="item">
        <i class="fas fa-user" />
        {{ item.text }}
      </VueNestableHandle>
      <template slot="footer" slot-scope="{ item, index }">
        <div class="add-item">
          <a @click="addRow(item, index)">
            <i class="fas fa-plus" /> Add item
          </a>
        </div>
      </template>
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
          id: 0,
          text: "Andy"
        },
        {
          id: 1,
          text: "Harry",
          children: [
            {
              id: 2,
              text: "David",
              children: [
                {
                  id: 11,
                  text: "Davids child",
                  children: []
                }
              ]
            },
            {
              id: 10,
              text: "Davids brother",
              children: []
            }
          ]
        },
        {
          id: 3,
          text: "Nicole"
        }
      ]
    };
  },
  methods: {
    addRow(row, index) {
      row.children.push({
        id: "new" + Math.floor(Math.random() * Math.floor(10000)),
        text: "New item",
        children: []
      });
    }
  }
};
</script>

<style scoped>
.add-item::before {
  content: " ";
  border: 5px solid #959eb1;
  border-radius: 100%;
  position: absolute;
  top: -6px;
  left: -6px;
}
.add-item {
  position: relative;
  margin: 0.5rem 0;
  padding: 0.5rem;
  border: 1px solid #959eb1;
  border-top: 3px solid #959eb1;

  border-radius: 6px;
  background: #f9fafb;
}
</style>
