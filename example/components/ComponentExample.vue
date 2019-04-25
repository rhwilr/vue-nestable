<template>
  <div class="component-example">
    <a
      :href="url"
      target="_blank"
      class="source-code-link"
    >
      <i class="fas fa-code" />
    </a>

    <slot />
  </div>
</template>

<script>
export default {
  props: {
    link: {
      type: String,
      required: true,
      default: null
    }
  },

  computed: {
    url () {
      return `https://github.com/rhwilr/vue-nestable/blob/master/example/components/${this.link}.vue`
    }
  }
}
</script>
