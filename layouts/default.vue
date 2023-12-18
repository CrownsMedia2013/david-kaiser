<template>
  <SpeedInsights />
  <nuxt />
</template>
<script>
import { SpeedInsights } from "@vercel/speed-insights/nuxt"

export default {
  components: {
    SpeedInsights
  }
}
</script>