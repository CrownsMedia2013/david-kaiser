<template>
  <div class="uk-panel">
    <hr class="tm-divider-bold-small" />
    <prismic-rich-text
      v-if="$notEmpty(column.title)"
      class="tm-title tm-text-block-title"
      :field="column.title"
    />
    <prismic-rich-text
      v-if="$notEmpty(column.text)"
      :field="column.text"
      class="tm-base-margin uk-panel"
    />
    <DocumentLink
      v-if="column.buttonLabel"
      :field="column.buttonLink"
      class="uk-button tm-columns-text-button"
    >
      {{ column.buttonLabel }}
    </DocumentLink>
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