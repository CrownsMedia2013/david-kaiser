<template>
  <img
    v-if="field"
    :src="
      $prismicImg(field, {
        width,
        height,
        maxWidth,
        maxHeight,
        format,
        quality,
      })
    "
    :alt="field.alt"
  />
</template>
<script>
export default {
  name: 'PrismicImg',
  props: {
    field: Object,
    width: Number,
    height: Number,
    maxWidth: Number,
    maxHeight: Number,
    format: String,
    quality: Number,
  },
}
</script>