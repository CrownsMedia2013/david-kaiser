<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

import slice from '@/mixins/slice'
import Card from './items/Card'
import IconCard from './items/IconCard'


const variations = {
  default: () => require('./variations/default').default,
  withIcon: () => require('./variations/withIcon').default,
}

export default {
  name: 'cards',
  mixins: [slice],
  components: { Card, IconCard },
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    const primary = this.slice.primary
    primary.alignment = primary.alignment || 'center'
    primary.color = primary.color || 'white'
    primary.imageRatio = primary.imageRatio || 60
    primary.maxColumns = primary.maxColumns || 3

    return {
      variations,
    }
  },
}
</script>