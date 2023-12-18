
export default {

  computed: {
    isInverse() {
      const data = this.data || this.slice.primary

      return this.isInverseColor(data.backgroundColor || data.background) ||
        this.context?.parent?.isInverse
    }
  },
  methods: {
    isInverseColor(color) {
      return ['dark', 'primary', 'secondary'].includes(color)
    }
  }
}