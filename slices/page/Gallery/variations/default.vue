<template>
  <div class="tm-slice tm-gallery tm-gallery-default">
    <div v-if="!slice.primary.slider" class="uk-container uk-container-large">
      <div
        class="uk-grid uk-grid-match uk-child-width-1-2@s"
        :class="[
          `uk-flex-${slice.primary.alignment}`,
          {
            'uk-child-width-1-3@m': slice.primary.maxColumns !== '2',
            'uk-child-width-1-4@l': slice.primary.maxColumns === '4',
          },
        ]"
        uk-grid
        uk-lightbox
      >
        <div v-for="(item, index) in slice.items" :key="index">
          <div
            class="uk-cover-container uk-transition-toggle"
            :style="{ paddingBottom: `${slice.primary.imageRatio}%` }"
          >
            <a
              class="uk-position-cover uk-background-center uk-background-cover uk-transition-opaque uk-transition-scale-up"
              :style="{
                backgroundImage: `url(${$prismicImg(item.image, {
                  maxWidth: 650,
                })}`,
              }"
              :href="
                $notEmpty(item.video)
                  ? $videoEmbed($prismic.asLink(item.video))
                  : $prismicImg(item.image, { maxWidth: 1920 })
              "
              :data-type="$notEmpty(item.video) ? 'iframe' : 'image'"
            >
              <i
                v-if="$notEmpty(item.video)"
                class="tm-icon-circle uk-position-center"
                ><Icon icon="mdi:play"
              /></i>
            </a>
          </div>
        </div>
      </div>
    </div>
    <div v-else uk-slider>
      <div class="uk-container uk-container-large uk-position-relative">
        <div class="uk-slider-container">
          <div
            class="uk-slider-items uk-grid uk-grid-match uk-child-width-1-2@s"
            :class="[
              `uk-flex-${slice.primary.alignment}@s`,
              {
                'uk-child-width-1-3@m': slice.primary.maxColumns !== '2',
                'uk-child-width-1-4@l': slice.primary.maxColumns === '4',
              },
            ]"
            uk-lightbox
          >
            <div v-for="(item, index) in slice.items" :key="index">
              <div
                class="uk-cover-container uk-transition-toggle"
                :style="{ paddingBottom: `${slice.primary.imageRatio}%` }"
              >
                <a
                  class="uk-position-cover uk-background-center uk-background-cover uk-transition-opaque uk-transition-scale-up"
                  :style="{
                    backgroundImage: `url(${$prismicImg(item.image, {
                      maxWidth: 650,
                    })}`,
                  }"
                  :href="
                    $notEmpty(item.video)
                      ? $videoEmbed($prismic.asLink(item.video))
                      : $prismicImg(item.image, { maxWidth: 1920 })
                  "
                  :data-type="$notEmpty(item.video) ? 'iframe' : 'image'"
                >
                  <i
                    v-if="$notEmpty(item.video)"
                    class="tm-icon-circle uk-position-center"
                    ><Icon icon="mdi:play"
                  /></i>
                </a>
              </div>
            </div>
          </div>
        </div>
        <div :class="{ 'uk-light': $parent.isInverse }">
          <a
            href="#"
            class="uk-position-center-left"
            uk-slidenav-previous
            uk-slider-item="previous"
          ></a>
          <a
            href="#"
            class="uk-position-center-right"
            uk-slidenav-next
            uk-slider-item="next"
          ></a>
        </div>
      </div>
      <div :class="{ 'uk-light': $parent.isInverse }">
        <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin-top"></ul>
      </div>
    </div>
  </div>
</template>