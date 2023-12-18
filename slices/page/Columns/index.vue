<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

import slice from '@/mixins/slice'

import Column from './items/Column'
import IconColumn from './items/IconColumn'
import TextColumn from './items/TextColumn'

const variations = {
  default: require('./variations/default').default,
  withIcon: require('./variations/withIcon').default,
  text: require('./variations/text').default,
}

export default {
  name: 'columns',
  mixins: [slice],
  components: {
    Column,
    IconColumn,
    TextColumn,
  },
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    const primary = this.slice.primary
    primary.alignment = primary.alignment || 'center'
    primary.maxColumns = primary.maxColumns || '4'
    primary.imageRatio = primary.imageRatio || 60

    return {
      variations,
    }
  },
}
</script>