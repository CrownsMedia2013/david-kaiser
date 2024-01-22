<template>
  <div
    class="tm-slice tm-brands tm-brands-default"
    :class="{ 'uk-light': isInverse }"
  >
    <div v-if="!slice.primary.slider" class="uk-container uk-container-large">
      <div
        class="uk-grid uk-grid-match uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-4@l"
        :class="`uk-flex-${slice.primary.alignment}`"
        uk-grid
      >
        <div
          v-for="(brand, index) in slice.items"
          v-if="brand.logo.url"
          :key="index"
        >
          <div class="uk-flex uk-flex-middle uk-flex-center">
            <DocumentLink :field="brand.link">
              <NuxtImg :src="brand.logo.url" :modifiers="{ mw: 400 }" />
            </DocumentLink>
          </div>
        </div>
      </div>
    </div>
    <div v-else>
      <div uk-slider>
        <div class="uk-container uk-container-large uk-position-relative">
          <div class="uk-slider-container">
            <div
              class="uk-slider-items uk-grid uk-grid-match uk-child-width-1-2 uk-child-width-1-3@m uk-child-width-1-4@l"
              :class="`uk-flex-${slice.primary.alignment}@s`"
            >
              <div
                v-for="(brand, index) in slice.items"
                v-if="brand.logo.url"
                :key="index"
              >
                <div class="uk-flex uk-flex-middle uk-flex-center">
                  <DocumentLink :field="brand.link">
                    <NuxtImg :src="brand.logo.url" :modifiers="{ mw: 400 }" />
                  </DocumentLink>
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
        <div :class="{ 'uk-light': isInverse }">
          <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin-top"></ul>
        </div>
      </div>
    </div>
  </div>
</template>