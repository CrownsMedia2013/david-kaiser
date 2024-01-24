<script>
import { getSliceComponentProps } from '@prismicio/vue/components'

import slice from '@/mixins/slice'

const variations = {
  default: require('./variations/default').default,
  select: require('./variations/select').default,
  checkbox: require('./variations/checkbox').default,
  textArea: require('./variations/textArea').default,
}

export default {
  name: 'form-field',
  mixins: [slice],
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context', 'name']),
  data() {
    const primary = this.slice.primary
    primary.alignment = primary.alignment || 'center'

    return {
      variations,
    }
  },
}
</script>