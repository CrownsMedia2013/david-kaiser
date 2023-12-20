<template>
  <div class="tm-slice tm-gallery tm-gallery-default">
    <div class="uk-container uk-container-large">
      <div class="uk-grid uk-child-width-1-3" uk-grid uk-lightbox>
        <div v-for="(item, index) in slice.items" :key="index">
          <div
            class="uk-cover-container"
            :style="{ paddingBottom: `${slice.primary.imageRatio}%` }"
          >
            <a
              class="uk-position-cover uk-background-center uk-background-cover"
              :style="{
                backgroundImage: `url(${$img(item.image.url, { w: 650 })}`,
              }"
              :href="$img(item.image, { mw: 2000 })"
            ></a>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>