<script>
import { getSliceComponentProps } from "@prismicio/vue/components"

import slice from '@/mixins/slice'
import Box from './items/Box'

const variations = {
  default: require('./variations/default').default,
}

export default {
  name: 'boxes',
  mixins: [slice],
  components: {
    Box
  },
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    const primary = this.slice.primary
    primary.imageRatio = primary.imageRatio || 75

    return {
      variations,
    }
  },
  computed: {
   
  },
}
</script>
