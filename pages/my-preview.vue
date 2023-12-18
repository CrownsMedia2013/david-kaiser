<template>
  <h1>Loading Prismic preview...</h1>
</template>
<script>
export default {
  mounted() {
    this.$prismic.preview()
  }
}
</script>