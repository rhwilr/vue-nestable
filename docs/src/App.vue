<template>
  <div class="app">
    <!-- Header -->
    <div class="header">
      <h1>vue-nestable</h1>

      <div class="command">npm install --save vue-nestable</div>

      <div class="description">Drag & drop hierarchical list made as a vue component</div>

      <section class="nav">
        <a href="https://github.com/rhwilr/vue-nestable#vue-nestable">Documentation</a>
        <a href="https://github.com/rhwilr/vue-nestable/issues">Report an issue</a>
        <a href="https://www.npmjs.com/package/vue-nestable">Npm package</a>
      </section>
    </div>

    <!-- Component Demo -->
    <div class="content">
      <h1>A simple list</h1>
      <simple/>

      <h1>Advanced list with custom drag handle</h1>
      <advanced/>

      <h1>Draggable across different lists</h1>
      <cross-list/>

      <h1>Customize the placeholder text</h1>
      <no-items/>
    </div>
  </div>
</template>

<script>

// import example components
import Simple from '@/components/Simple.vue'
import Advanced from '@/components/Advanced.vue'
import CrossList from '@/components/CrossList.vue'
import NoItems from '@/components/NoItems.vue'

// import styles
import('../assets/vue-nestable.css')
import('../assets/docs.css')

export default {
  name: 'App',

  components: {
    Simple,
    Advanced,
    CrossList,
    NoItems
  }
}
</script>
