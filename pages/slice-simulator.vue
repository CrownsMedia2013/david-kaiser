<template>
  <SliceSimulator v-slot="{ slices }" :state="state">
    <SliceZone :slices="slices" :components="components" />
  </SliceSimulator>
</template>

<script>
import { SliceSimulator } from '@prismicio/slice-simulator-vue'
import { components } from '~/slices/_index'

//import state from '~~/.slicemachine/libraries-state.json'
const state = {}

export default {
  nuxtI18n: false,
  components: {
    SliceSimulator
  },
  data() {
    return { state, components }
  },
  mounted() {
    
  },
}
</script>
