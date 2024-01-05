<template>
  <div class="tm-column" :class="{ 'uk-light': this.isInverse }">
    <div class="tm-column-body" :class="`uk-text-${slice.primary.alignment}`">
      <div v-if="column.icon">
        <DocumentLink
          v-if="$notEmpty(column.buttonLink)"
          :field="column.buttonLink"
          class="tm-icon-circle tm-columns-with-icon-icon"
        >
          <Icon :icon="column.icon" />
        </DocumentLink>
        <div v-else class="tm-icon-circle tm-columns-with-icon-icon">
          <Icon :icon="column.icon" />
        </div>
      </div>
      <prismic-rich-text
        v-if="$notEmpty(column.subtitle)"
        class="tm-subtitle tm-columns-subtitle"
        :field="column.subtitle"
      />
      <DocumentLink
        v-if="$notEmpty(column.buttonLink)"
        :field="column.buttonLink"
        class="tm-title uk-link-reset"
      >
        <prismic-rich-text
          v-if="$notEmpty(column.title)"
          class="tm-columns-with-icon-subtitle uk-link-heading"
          :field="column.title"
        ></prismic-rich-text>
      </DocumentLink>
      <prismic-rich-text
        v-else-if="$notEmpty(column.title)"
        class="tm-title tm-columns-with-icon-title"
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