<template>
  <div class="app">
    <!-- Header -->
    <div class="header">
      <h1>vue-nestable</h1>

      <div class="command">
        npm install --save vue-nestable
      </div>

      <div class="description">
        Drag & drop hierarchical list made as a vue component
      </div>

      <section class="nav">
        <a href="https://github.com/rhwilr/vue-nestable#vue-nestable">
          Documentation
        </a>
        <a href="https://github.com/rhwilr/vue-nestable/issues">
          Report an issue
        </a>
        <a href="https://www.npmjs.com/package/vue-nestable">
          Npm package
        </a>
      </section>
    </div>

    <!-- Component Demo -->
    <div class="content">
      <h1>Just a list</h1>
      <p>This is about as minimal as it gets. We just render a list of individual items.</p>
      <List />

      <h1>Sort items by drag & drop</h1>
      <p>Wrap your item in a <code>vue-nestable-handle</code> to allow it to be dragged.</p>
      <Simple />

      <h1>Advanced (Drag handle, Classes, and Hooks)</h1>
      <p>
        You can customize how deeply items can be nested as well what the <code>id</code> prop is called.<br>
        In this example we also add custom css classes for each item, and added a hook that prevents one item from being nested.
      </p>
      <Advanced />

      <h1>Draggable across different lists</h1>
      <p>You can drag items across different lists if you set the <code>group</code> property to the same value.</p>
      <CrossList />

      <h1>Customize the placeholder text</h1>
      <p>You can display a placeholder when there are no items in the list.</p>
      <NoItems />

      <h1>RTL Support</h1>
      <p>Add the <code>rtl</code> prop to support RTL languages.</p>
      <SimpleRtl />
    </div>
  </div>
</template>

<script>

// import example components
import List from './components/List.vue'
import Simple from './components/Simple.vue'
import SimpleRtl from './components/SimpleRtl.vue'
import Advanced from './components/Advanced.vue'
import CrossList from './components/CrossList.vue'
import NoItems from './components/NoItems.vue'

// import styles
require('./assets/vue-nestable.css')
require('./assets/examples.css')

export default {
  name: 'App',

  components: {
    List,
    Simple,
    SimpleRtl,
    Advanced,
    CrossList,
    NoItems
  }
}
</script>
