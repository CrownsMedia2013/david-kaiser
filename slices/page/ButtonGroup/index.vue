<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

import slice from '@/mixins/slice'

const variations = {
  default: () => require('./variations/default').default,
  icons: () => require('./variations/icons').default,
  large: () => require('./variations/large').default,
}

export default {
  name: 'button-group',
  mixins: [slice],
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    const primary = this.slice.primary
    primary.alignment = primary.alignment || 'center'

    return {
      variations,
    }
  },
}
</script>
