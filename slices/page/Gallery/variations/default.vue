<template>
  <div class="tm-slice tm-gallery tm-gallery-default">
    <div class="uk-container uk-container-large">
      <div class="uk-grid uk-child-width-1-3" uk-grid uk-lightbox>
        <div v-for="(item, index) in slice.items" :key="index">
          <div
            class="uk-cover-container uk-transition-toggle"
            :style="{ paddingBottom: `${slice.primary.imageRatio}%` }"
          >
            <a
              class="uk-position-cover uk-background-center uk-background-cover uk-transition-opaque uk-transition-scale-up"
              :style="{
                backgroundImage: `url(${$prismicImg(item.image, { maxWidth: 650 })}`,
              }"
              :href="$prismicImg(item.image, { maxWidth: 1920 })"
              data-type="image"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>