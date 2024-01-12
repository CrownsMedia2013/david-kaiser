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
          class="uk-flex uk-flex-middle uk-flex-center"
        >
          <div>
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
                class="uk-flex uk-flex-middle uk-flex-center"
              >
                <div>
                  <DocumentLink :field="brand.link">
                    <NuxtImg :src="brand.logo.url" :modifiers="{ mw: 400 }" />
                  </DocumentLink>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>