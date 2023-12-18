<template>
  <SpeedInsights />
  <nuxt />
</template>
<script>
import { SpeedInsights } from "@vercel/speed-insights/dist/nuxt/index.js"

export default {
  components: {
    SpeedInsights
  }
}
</script>