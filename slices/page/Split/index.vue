<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

import slice from '@/mixins/slice'

const variations = {
  default: () => require('./variations/default').default,
}

export default {
  name: 'split',
  mixins: [slice],
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context', 'parentInverse']),
  data() {
    const primary = this.slice.primary

    return {
      variations,
    }
  }
}
</script>