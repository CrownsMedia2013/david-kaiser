<template>
  <div class="tm-slice tm-boxes tm-boxes-default">
    <div class="uk-container uk-container-large">
      <div class="uk-grid uk-grid-collapse uk-child-width-1-2@m" uk-grid>
        <div v-for="(box, index) in slice.items" :key="index">
          <div
            class="tm-box uk-background-center uk-background-cover"
            :class="`uk-background-${box.backgroundColor}`"
            :style="{
              aspectRatio: `100 / ${slice.primary.minRatio}`,
              backgroundImage: box.image.url
                ? `url(${$prismicImg(box.image, { width: 800 })}`
                : null,
            }"
          >
            <div class="uk-padding">
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
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
