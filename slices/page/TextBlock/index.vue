<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

import slice from '@/mixins/slice'

const variations = {
  default: require('./variations/default').default,
  large: require('./variations/large').default,
  heroTitle: require('./variations/heroTitle.vue').default,
  sideTitle: require('./variations/sideTitle').default,
}

export default {
  name: 'textBlock',
  mixins: [slice],
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context', 'parentInverse']),
  data() {
    const primary = this.slice.primary
    if (!primary.alignment) {
      primary.alignment = this.slice.variation === 'default' ? 'center' : 'left'
    }

    const data = {}

    return {
      variations,
    }
  },
  computed: {
    sideTitleTextAlign() {
      if (this.slice.primary.alignment === 'center') {
        return this.slice.primary.textPosition === 'left' ? 'right' : 'left'
      }

      return this.slice.primary.alignment
    },
    sideTitleAlign() {
      if (this.slice.primary.alignment === 'center') {
        return this.slice.primary.textPosition === 'left' ? 'left' : 'right'
      }

      return 'left'
    },
  },
}
</script>