<template>
  <div v-if="loading" class="tm-loading">
    <div class="uk-position-center">
      <progress class="uk-progress" :value="progress" />
    </div>
  </div>
</template>
<script>
export default {
  name: 'loading',
  data: () => ({
    loading: false,
    progress: 0,
  }),
  methods: {
    start() {
      this.loading = true
    },
    finish() {
      this.loading = false
    },
    increase(value) {
      this.progress = value
    },
  }
}
</script>