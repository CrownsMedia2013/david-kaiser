<template>
  <section
    v-if="slices"
    class="tm-page-section uk-background-cover"
    :class="[
      `uk-background-${document.data.backgroundColor}`,
      hasBackgroundOverlay
        ? `tm-background-overlay-strong-${document.data.backgroundImageOverlay}`
        : '',
      `uk-background-center-${document.data.backgroundPosition}`, {
        'tm-page-section-divider': document.data.divider,
      }
    ]
    "
    :style="
      hasBackgroundImage
        ? `background-image: url(${document.data.backgroundImage.url})`
        : ''
    "
    :uk-parallax="document.data.parallaxEffect? 'bgy: -165': ''"
  >
    <div
      v-if="hasBackgroundOverlay"
      class="tm-overlay uk-position-cover"
      :class="`tm-overlay-strong-${document.data.backgroundImageOverlay}`"
      style="z-index: -1"
    ></div>
    <SliceZone
      type="page_section"
      :class="hasBackgroundOverlay"
      :slices="data.slices"
      :context="{ parent: this }"
      :resolver="({ sliceName }) => slices[sliceName]"
    />
  </section>
</template>

<script>
import invertible from '@/mixins/invertible';
import doc from '@/mixins/doc';
import fitsHeader from '@/mixins/fitsHeader';
import { components as slices } from '@/slices/page';

export default {
  name: "PageSection",
  mixins: [invertible, doc, fitsHeader],
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  data() {
    const data = this.document.data;
    data.backgroundImageOverlay = data.backgroundImageOverlay || 'dark'
    data.backgroundPosition = data.backgroundPosition || 'center'

    return { slices }
  },
  computed: {
    isInverse() {
      return this.hasBackgroundImage && this.document.data.backgroundImageOverlay === 'dark' ||
        invertible.computed.isInverse.apply(this)
    },
    hasBackgroundImage() {
      return !!this.document.data.backgroundImage.url
    },
    hasBackgroundOverlay() {
      return this.hasBackgroundImage && this.document.data.backgroundImageOverlay !== 'none'
    }
  },
}
</script>
