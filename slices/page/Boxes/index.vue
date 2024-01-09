<script>
import { getSliceComponentProps } from "@prismicio/vue/components"

import slice from '@/mixins/slice'

const variations = {
  default: require('./variations/default').default,
}

export default {
  name: 'boxes',
  mixins: [slice],
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    return {
      variations,
    }
  },
}
</script>
