<template>
  <SpeedInsights />
  <nuxt />
</template>
<script>
import { SpeedInsights } from "@vercel/speed-insights/dist/vue"

export default {
  components: {
    SpeedInsights
  }
}
</script>