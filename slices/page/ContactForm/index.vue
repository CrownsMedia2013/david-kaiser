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
    
    primary.sendButtonLabel = primary.sendButtonLabel || 'Send Message'

    return {
      variations,
      formFields: [],
    }
  },
  async fetch() {
    if (!this.slice.primary.formFields?.id) {
      return
    }
    const response = await this.$prismic.api.getByID(this.slice.primary.formFields.id)
    this.formFields = response?.data?.slices
  },
}
</script>
