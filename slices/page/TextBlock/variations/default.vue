<template>
  <div
    class="tm-slice tm-text-block tm-text-block-default"
    :class="{ 'uk-light': isInverse }"
  >
    <div
      class="uk-container uk-container-small"
      :class="`uk-text-${slice.primary.alignment}`"
    >
      <h6
        v-if="$notEmpty(slice.primary.subtitle)"
        class="tm-subtitle tm-text-block-subtitle tm-margin-remove-last"
      >
        {{ $prismic.asText(slice.primary.subtitle) }}
      </h6>
      <prismic-rich-text
        v-if="$notEmpty(slice.primary.title)"
        class="tm-title tm-text-block-title tm-margin-remove-last"
        :field="slice.primary.title"
      />
      <prismic-rich-text
        v-if="$notEmpty(slice.primary.text)"
        class="tm-margin-remove-last"
        :field="slice.primary.text"
      />
      <div
        v-if="slice.items.length"
        class="tm-text-block-buttons uk-grid uk-grid-small"
        :class="`uk-flex-${slice.primary.alignment}`"
        uk-grid
      >
        <div v-for="(item, index) in slice.items" class="" :key="index">
          <DocumentLink
            v-if="item.buttonLabel"
            :field="item.buttonLink"
            class="uk-button tm-text-block-button"
          >
            {{ item.buttonLabel }}
          </DocumentLink>
        </div>
      </div>
    </div>
  </div>
</template>