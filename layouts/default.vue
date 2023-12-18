<template>
  <SpeedInsights />
  <nuxt />
</template>
<script>
import { SpeedInsights } from "@vercel/speed-insights/vue"

export default {
  components: {
    SpeedInsights
  }
}
</script>