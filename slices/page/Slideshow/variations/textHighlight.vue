<template>
  <div
    class="tm-slice tm-slideshow tm-slideshow-text-highlight uk-position-relative"
    :class="[
      `tm-slideshow-${slice.primary.height}`,
      {
        'uk-light': isInverse,
        'tm-transparent-header': slice.primary.transparentHeader,
      },
    ]"
    :tm-slice="slice.slice_type"
    :tm-variation="slice.variation"
    :uk-slideshow="slideshowOptions"
  >
    <ul
      class="uk-slideshow-items"
      :uk-height-viewport="
        slice.primary.height === 'fullscreen' ? 'offset-top: true' : false
      "
    >
      <li
        v-for="(item, index) in slice.items"
        class="uk-flex uk-flex-middle"
        :key="index"
      >
        <div
          v-if="item.backgroundImage.url"
          class="uk-position-cover uk-background-cover"
          :class="[
            `uk-background-center-${item.backgroundAlignment}`,
            { 'uk-animation-kenburns': primary.kenBurnsEffect },
          ]"
          :data-src="$prismicImg(item.backgroundImage, { maxWidth: 1920 })"
          :uk-parallax="primary.parallaxEffect ? 'bgy: -165' : ''"
          uk-img="target: !.uk-slideshow-items"
          ref="image"
        ></div>
        <VideoPlayer
          v-if="$notEmpty(item.video)"
          :src="$prismic.asLink(item.video)"
          :params="{ loop: 1, muted: 1, autoplay: 1, controls: 0 }"
        />
        <div
          v-if="slice.primary.backgroundOverlay"
          class="tm-overlay uk-position-cover"
          :class="`tm-overlay-default-${slice.primary.color}`"
        ></div>
        <div
          class="tm-slideshow-item-content uk-position-large uk-width-1-1 uk-position-z-index"
        >
          <div
            :class="`uk-container uk-container-large uk-flex uk-flex-${item.textAlignment} uk-text-${item.textAlignment}`"
          >
            <div
              :class="{ 'uk-width-1-2@m': item.textAlignment !== 'center' }"
              class="uk-width-3-4@s uk-width-1-2@l"
            >
              <PrismicRichText
                v-if="$notEmpty(item.subtitle)"
                class="tm-subtitle tm-slideshow-text-highlight-subtitle"
                :field="item.subtitle"
              />
              <PrismicRichText
                v-if="$notEmpty(item.title)"
                :field="item.title"
                class="tm-title tm-slideshow-text-highlight-title tm-text-highlight"
              />
              <DocumentLink
                v-if="$notEmpty(item.buttonTitle)"
                :field="item.buttonLink"
                class="uk-button tm-slideshow-text-highlight-button"
              >
                {{ $prismic.asText(item.buttonTitle) }}
              </DocumentLink>
            </div>
          </div>
        </div>
      </li>
    </ul>
    <a
      class="uk-position-center-left uk-position-small"
      href="#"
      uk-slidenav-previous
      uk-slideshow-item="previous"
    ></a>
    <a
      class="uk-position-center-right uk-position-small"
      href="#"
      uk-slidenav-next
      uk-slideshow-item="next"
    ></a>
    <ul
      class="uk-slideshow-nav uk-dotnav uk-position-bottom uk-position-medium uk-flex-center"
    ></ul>
  </div>
</template>