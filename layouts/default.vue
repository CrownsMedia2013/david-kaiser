<template>
  <SpeedInsights />
  <nuxt />
</template>
<script>
import { SpeedInsights } from "@vercel/speed-insights/dist/nuxt"

export default {
  components: {
    SpeedInsights
  }
}
</script>