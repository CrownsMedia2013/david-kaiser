<script>
import slice from '@/mixins/slice';

const variations = {
  link: require('./variations/link').default,
  dropdown: require('./variations/dropdown').default,
}

export default {
  name: 'NavItem',
  mixins: [slice],
  props: {
    slice: {
      type: Object,
      required: true,
      default() {
        return {}
      },
    },
    vertical: {
      type: Boolean,
      default() {
        return false
      }
    },
  },
  data() {
    return { variations  }
  },
  computed: {
    isActive() {
      if (this.slice.variation === 'link') {
        const link = this.primary.link

        return this.$prismic.asLink(link) === this.$nuxt.$route.path
      } else {
        const items = this.slice.items

        for (let i = 0; i < items.length; i++) {
          const link = items[i].link

          if (this.$prismic.asLink(link) === this.$nuxt.$route.path) {
            return true
          }
        }

        return false
      }
    },
  },
  methods: {
    isLinkActive(link) {
      console.log("isLinkActive", this.$prismic.asLink(link), this.$nuxt.$route.path, this.$prismic.asLink(link) === this.$nuxt.$route.path)
      return this.$prismic.asLink(link) === this.$nuxt.$route.path
    }
  }
}
</script>