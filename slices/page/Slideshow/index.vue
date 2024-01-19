

<script>
import slice from '@/mixins/slice'
import VideoPlayer from '@/components/VideoPlayer'

const variations = {
  default: require('./variations/default').default,
  textHighlight: require('./variations/textHighlight').default,
}

export default {
  name: 'slideshow',
  mixins: [slice],
  components: {
    VideoPlayer,
  },
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
    const primary = this.slice.primary
    primary.color = primary.color || 'dark'
    primary.height = primary.height || 'large'
    primary.backgroundOverlay = primary.backgroundOverlay === undefined || primary.backgroundOverlay
    primary.parallaxEffect= primary.parallaxEffect || false

    let slideshowOptions = 'autoplay: true; ratio: false; max-height: false;'

    if (primary.height === 'fullscreen') {
      slideshowOptions += 'min-height: 350;'
    }

    return {
      variations,
      slideshowOptions,
    }
  },
  computed: {
    isInverse() {
      return this.slice.primary.color === 'dark'
    },
  },
}
</script>