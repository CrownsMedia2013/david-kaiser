<script>
import { getSliceComponentProps } from "@prismicio/vue/components"

import slice from '@/mixins/slice'

import FormField from '@/slices/form/FormField'

const variations = {
  default: () => require('./variations/default').default,
}

export default {
  name: 'contact-form',
  mixins: [slice],
  components: {
    FormField,
  },
  props: getSliceComponentProps(['slice', 'index', 'slices', 'context']),
  data() {
    const primary = this.slice.primary

    return {
      variations,
      formFields: [],
    }
  },
  async fetch() {
    if (!this.slice.primary.formFields?.id) {
      return
    }
    this.formFields = (await this.$prismic.api.getByID(this.slice.primary.formFields.id) || '') || {}
    const data = this.formFields?.data || {}
    data.sendButtonLabel = data.sendButtonLabel || 'Send Message'
  },
}
</script>
