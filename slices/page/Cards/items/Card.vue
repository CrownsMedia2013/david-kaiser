<template>
  <div
    class="uk-card"
    :class="[
      `uk-background-${slice.primary.backgroundColor}`,
      { 'uk-light': isInverse },
    ]"
  >
    <div class="tm-card-media uk-card-media-top uk-cover-container">
      <div :style="{ paddingBottom: `${slice.primary.imageRatio}%` }">
        <div
          class="uk-position-cover uk-background-center uk-background-cover"
          :style="{
            backgroundImage: card.image.url
              ? `url(${$prismicImg(card.image, { width: 650 })}`
              : null,
          }"
        ></div>
        <DocumentLink
          v-if="$notEmpty(card.buttonLink)"
          :field="card.buttonLink"
          class="uk-position-cover"
        />
      </div>
    </div>
    <div class="uk-card-body" :class="`uk-text-${slice.primary.alignment}`">
      <prismic-rich-text
        v-if="$notEmpty(card.subtitle)"
        class="tm-subtitle tm-cards-subtitle tm-margin-remove-last"
        :field="card.subtitle"
      />
      <DocumentLink
        v-if="$notEmpty(card.buttonLink)"
        :field="card.buttonLink"
        class="uk-link-reset tm-margin-remove-last"
      >
        <prismic-rich-text
          v-if="$notEmpty(card.title)"
          class="tm-title tm-cards-default-subtitle uk-link-heading"
          :field="card.title"
        ></prismic-rich-text>
      </DocumentLink>
      <prismic-rich-text
        v-else-if="$notEmpty(card.title)"
        class="tm-title tm-cards-default-title tm-margin-remove-last"
        :field="card.title"
      ></prismic-rich-text>
      <prismic-rich-text
        v-if="$notEmpty(card.text)"
        class="tm-base-margin tm-margin-remove-last"
        :field="card.text"
      />
      <DocumentLink
        v-if="card.buttonLabel"
        :field="card.buttonLink"
        class="uk-button tm-cards-default-button"
      >
        {{ card.buttonLabel }}
      </DocumentLink>
    </div>
  </div>
</template>
<script>
import invertible from '@/mixins/invertible'

export default {
  name: 'card',
  mixins: [invertible],
  props: {
    slice: {
      type: Object,
      required: true,
    },
    card: {
      type: Object,
      required: true,
    }
  },
}
</script>