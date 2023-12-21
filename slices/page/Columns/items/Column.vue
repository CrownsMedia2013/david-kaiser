<template>
  <div class="tm-column" :class="{ 'uk-light': this.isInverse }">
    <div class="tm-column-media uk-cover-container">
      <div :style="{ paddingBottom: `${slice.primary.imageRatio}%` }">
        <div
          class="uk-position-cover uk-background-center uk-background-cover"
          :style="{
            backgroundImage: `url(${$prismicImg(column.image, {
              width: 650,
            })})`,
          }"
        ></div>
        <DocumentLink
          v-if="$notEmpty(column.buttonLink)"
          :field="column.buttonLink"
          class="uk-position-cover"
        />
      </div>
    </div>
    <div class="tm-column-body" :class="`uk-text-${slice.primary.alignment}`">
      <prismic-rich-text
        v-if="$notEmpty(column.subtitle)"
        class="tm-subtitle tm-columns-subtitle"
        :field="column.subtitle"
      />
      <DocumentLink
        v-if="$notEmpty(column.buttonLink)"
        :field="column.buttonLink"
        class="uk-link-reset"
      >
        <prismic-rich-text
          v-if="$notEmpty(column.title)"
          class="tm-title tm-columns-default-subtitle uk-link-heading"
          :field="column.title"
        ></prismic-rich-text>
      </DocumentLink>
      <prismic-rich-text
        v-else-if="$notEmpty(column.title)"
        class="tm-title tm-columns-default-title"
        :field="column.title"
      ></prismic-rich-text>
      <prismic-rich-text
        v-if="$notEmpty(column.text)"
        class="tm-base-margin uk-panel"
        :field="column.text"
      />
      <DocumentLink
        v-if="column.buttonLabel"
        :field="column.buttonLink"
        class="uk-button tm-columns-with-icon-button"
      >
        {{ column.buttonLabel }}
      </DocumentLink>
    </div>
  </div>
</template>
<script>
import invertible from '@/mixins/invertible'

export default {
  name: 'column',
  mixins: [invertible],
  props: {
    slice: {
      type: Object,
      required: true,
    },
    column: {
      type: Object,
      required: true,
    }
  },
}
</script>