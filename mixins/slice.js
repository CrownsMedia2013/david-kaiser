import invertible from './invertible';

export default {
  mixins: [ invertible ],
  data() {
    return {
      primary: this.slice.primary,
    }
  },
  computed: {
    isInverse() {
      return this.context?.parent.isInverse || 
        ['dark', 'primary', 'secondary'].includes(
          this.slice.primary.backgroundColor
        );z
    },
  },
  render() {
    if (this.variations) {
      return this.variations[this.slice.variation].render?.apply(this, arguments);
    }
  }
}