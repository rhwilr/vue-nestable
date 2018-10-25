<template>
  <div class="app">
    <h1>A simple list</h1>
    <simple/>

    <h1>Advanced list with custom drag handle</h1>
    <advanced/>

    <h1>Draggable across different lists</h1>
    <cross-list/>

    <h1>Customize the placeholder text</h1>
    <no-items/>
  </div>
</template>

<script>
import('../assets/vue-nestable.css')

import Simple from '@/components/Simple.vue'
import Advanced from '@/components/Advanced.vue'
import CrossList from '@/components/CrossList.vue'
import NoItems from '@/components/NoItems.vue'

export default {
  name: 'app',
  components: {
    Simple,
    Advanced,
    CrossList,
    NoItems
  }
}
</script>

<style>
/*
* Style for examples
*/
body {
    display: flex;
    align-items: flex-start;
    justify-content: center;
    height: 100vh;
    margin: 0;
    background-color: #f3f3f4;
}

.app {
    color: #444;
    margin-top: 3em;
    max-width: 800px;
    flex: 1;
    font-family: Helvetica, sans-serif;
    display: flex;
    flex-direction: column;
}

.component-example {
    border-radius: 4px;
    box-shadow: 0 2px 3px 0 rgba(16, 17, 23, .1), 0 0 1px 0 rgba(16, 17, 23, .1);
    background-color: white;
    color: #49494d;
    padding: 1em;
    flex: 1;
    margin: 1em;
}
.side-by-side {
  display: flex;
}
h1 {
  margin-bottom: 0;
}
</style>
