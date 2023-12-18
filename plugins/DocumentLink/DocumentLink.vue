<template>
  <a v-if="!field">
    <slot />
  </a>
  <nuxt-link v-else-if="isNuxtLink" :to="url">
    <slot />
  </nuxt-link>
  <a v-else :href="url || '#'" :target="field.target" :uk-scroll="isScrolling">
    <slot />
  </a>
</template>

<script>
export default {
  name: 'DocumentLink',
  props: {
    field: Object,
  },
  computed: {
    url() {
      return this.$prismic.asLink(this.field)
    },
    isActive() {
      return this.url === this.$nuxt.$route.path
    },
    isNuxtLink() {
      return this.field.link_type !== 'Web' && !this.url.startsWith('#')
    },
    isScrolling() {
      return /#.+/.test(this.url)
    }
  },
}
</script>