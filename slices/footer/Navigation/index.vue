<script>
import slice from '@/mixins/slice'

const variations = {
  default: require('./variations/default').default,
  icons: require('./variations/icons').default,
  circledIcons: require('./variations/circledIcons').default,
}

export default {
  name: "Navigation",
  mixins: [ slice ],
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
  },
  data() {
    return { variations }
  },
}
</script>