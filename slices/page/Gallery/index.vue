<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

import slice from '@/mixins/slice'

const variations = {
  default: require('./variations/default').default,
}

export default {
  name: 'gallery',
  mixins: [slice],
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context', 'parentInverse']),
  data() {
    const primary = this.slice.primary
    primary.alignment = primary.alignment || 'center'
    primary.imageRatio = primary.imageRatio || 80

    return {
      variations,
    }
  },
  mounted() {
    console.log('gallery.mounted', this.slice)
  }
}
</script>