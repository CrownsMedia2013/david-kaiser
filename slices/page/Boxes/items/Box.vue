<template>
  <div
    class="tm-box uk-background-center uk-background-cover"
    :class="[
      `uk-background-${box.backgroundColor}`,
      {
        'uk-light': isInverse,
      },
    ]"
    :style="{
      aspectRatio: `100 / ${slice.primary.minRatio}`,
      backgroundImage: box.backgroundImage.url
        ? `url(${$prismicImg(box.backgroundImage, { width: 800 })}`
        : null,
    }"
  >
    <div
      v-if="box.backgroundImageOverlay && box.backgroundImage.url"
      class="tm-overlay uk-position-cover"
      :class="
        isInverse ? 'tm-overlay-default-dark' : 'tm-overlay-default-light'
      "
    ></div>
    <div class="tm-box-body uk-flex-center">
      <prismic-rich-text
        v-if="$notEmpty(box.subtitle)"
        class="tm-subtitle tm-cards-subtitle tm-margin-remove-last"
        :field="box.subtitle"
      />
      <PrismicRichText
        v-if="$notEmpty(box.title)"
        class="tm-title tm-boxes-default-title tm-margin-remove-last"
        :field="box.title"
      />
      <PrismicRichText
        v-if="$notEmpty(box.text)"
        class="tm-margin-remove-last"
        :field="box.text"
      />
      <DocumentLink
        v-if="box.buttonLabel"
        :field="box.buttonLink"
        class="uk-button tm-cards-default-button"
      >
        {{ box.buttonLabel }}
      </DocumentLink>
    </div>
  </div>
</template>
<script>
import invertible from '@/mixins/invertible'

export default {
  name: 'box',
  mixins: [invertible],
  props: {
    slice: {
      type: Object,
      required: true,
    },
    box: {
      type: Object,
      required: true,
    }
  },
  computed: {
    isInverse() {
      return this.box.backgroundImage.url && this.box.backgroundColor === 'default'
        || this.isInverseColor(this.box.backgroundColor)
    }
  },
}
</script>