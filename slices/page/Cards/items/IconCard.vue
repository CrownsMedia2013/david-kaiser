<template>
  <div
    class="uk-card"
    :class="[
      `uk-background-${slice.primary.backgroundColor}`,
      { 'uk-light': this.isInverse },
    ]"
  >
    <div class="uk-card-body" :class="`uk-text-${slice.primary.alignment}`">
      <div v-if="card.icon">
        <DocumentLink
          v-if="$notEmpty(card.buttonLink)"
          :field="card.buttonLink"
          class="tm-icon-circle tm-cards-with-icon-icon tm-margin-remove-last"
        >
          <Icon :icon="card.icon" />
        </DocumentLink>
        <div v-else class="tm-icon-circle tm-cards-with-icon-icon tm-margin-remove-last">
          <Icon :icon="card.icon" />
        </div>
      </div>
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
        class="uk-button tm-cards-with-icon-button tm-margin-remove-last"
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