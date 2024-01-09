<template>
  <div
    class="tm-slice tm-text-block tm-text-block-side-title"
    :class="{ 'uk-light': isInverse }"
  >
    <div
      class="uk-container uk-container-large"
      :class="`uk-text-${slice.primary.alignment}`"
    >
      <div
        class="uk-grid uk-child-width-1-2@m"
        :class="
          slice.primary.alignment === 'center'
            ? 'uk-grid-divider'
            : 'uk-grid-large'
        "
        uk-grid
      >
        <div
          class="uk-margin-remove-adjacent"
          :class="`uk-text-${sideTitleTextAlign} uk-text-${sideTitleAlign}@m`"
        >
          <h6
            v-if="$notEmpty(slice.primary.subtitle)"
            class="tm-subtitle tm-text-block-subtitle"
          >
            {{ $prismic.asText(slice.primary.subtitle) }}
          </h6>
          <prismic-rich-text
            v-if="$notEmpty(slice.primary.title)"
            class="tm-title tm-text-block-title tm-base-margin-large tm-margin-remove-last"
            :field="slice.primary.title"
          />
          <hr
            class="tm-divider-bold tm-text-block-divider"
            :class="{
              'uk-margin-auto-left': sideTitleTextAlign === 'right',
              'uk-margin-auto-left@m': sideTitleAlign === 'right',
              'uk-margin-remove-left@m': sideTitleAlign === 'left',
            }"
          />
        </div>
        <div :class="`uk-text-${sideTitleTextAlign}`">
          <prismic-rich-text
            v-if="$notEmpty(slice.primary.text)"
            class="tm-base-margin-large tm-margin-remove-lasty"
            :field="slice.primary.text"
          />
          <div
            v-if="slice.items.length"
            class="tm-text-block-buttons uk-grid uk-grid-small"
            :class="`uk-flex-${sideTitleTextAlign}`"
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
    </div>
  </div>
</template>