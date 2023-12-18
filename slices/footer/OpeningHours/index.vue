

<script>
import slice from '@/mixins/slice'

const variations = {
  default: require('./variations/default').default,
}

export default {
  name: "OpeningHours",
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