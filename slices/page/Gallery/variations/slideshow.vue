<template>
  <div class="tm-slice tm-gallery-slideshow">
    <div uk-slideshow>
      <div class="uk-container uk-container-small">
        <div class="uk-position-relative">
          <ul class="uk-slideshow-items" uk-lightbox>
            <li v-for="(item, index) in slice.items" :key="index">
              <a
                class="uk-position-cover uk-background-cover"
                :data-src="$prismicImg(item.image, { maxWidth: 1600 })"
                uk-img="target: !.tm-slideshow"
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
            </li>
          </ul>
          <div :class="{ 'uk-light': isInverse }">
            <a
              class="uk-position-center-left-out uk-position-small"
              href
              uk-slidenav-previous
              uk-slideshow-item="previous"
            ></a>
            <a
              class="uk-position-center-right-out uk-position-small"
              href
              uk-slidenav-next
              uk-slideshow-item="next"
            ></a>
          </div>
        </div>
        <div class="uk-margin" :class="{ 'uk-light': isInverse }">
          <ul class="uk-slideshow-nav uk-dotnav uk-flex-center"></ul>
        </div>
      </div>
    </div>
  </div>
</template>