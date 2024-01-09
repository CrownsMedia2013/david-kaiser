<template>
  <div
    class="tm-slice tm-text-block tm-text-block-hero-title"
    :class="{ 'uk-light': isInverse }"
  >
    <div
      class="uk-container uk-container-small"
      :class="`uk-text-${slice.primary.alignment}`"
    >
      <prismic-rich-text
        v-if="$notEmpty(slice.primary.title)"
        class="tm-title tm-text-block-title uk-heading-medium tm-margin-remove-last"
        :class="{
          'uk-text-muted': slice.primary.color === 'muted',
        }"
        :field="slice.primary.title"
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