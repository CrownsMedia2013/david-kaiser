<template>
  <div
    class="tm-slice tm-split tm-split-default"
    :class="{ 'uk-light': isInverse }"
  >
    <div class="uk-container uk-container-large">
      <div
        class="uk-grid uk-grid-large uk-child-width-1-1"
        :class="{ 'uk-grid-divider': slice.primary.divider }"
        uk-grid
      >
        <div v-for="(item, index) in slice.items" :key="index">
          <div
            class="uk-grid uk-grid-large uk-child-width-1-2@m"
            :class="[
              `uk-flex-${slice.primary.verticalAlignment}`,
              {
                'uk-flex-row-reverse': item.imagePosition === 'right',
              },
            ]"
            uk-grid
          >
            <div>
              <NuxtImg
                v-if="item.image.url"
                :src="item.image.url"
                :alt="item.image.alt"
                width="1000"
              />
            </div>
            <div>
              <h6
                v-if="$notEmpty(item.subtitle)"
                class="tm-subtitle tm-text-block-subtitle"
              >
                {{ $prismic.asText(item.subtitle) }}
              </h6>
              <prismic-rich-text
                v-if="$notEmpty(item.title)"
                class="tm-title tm-text-block-title"
                :field="item.title"
              />
              <prismic-rich-text
                v-if="$notEmpty(item.text)"
                class="tm-base-margin uk-panel"
                :field="item.text"
              />
              <DocumentLink
                v-if="item.buttonLabel"
                :field="item.buttonLink"
                class="uk-button tm-split-default-button"
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