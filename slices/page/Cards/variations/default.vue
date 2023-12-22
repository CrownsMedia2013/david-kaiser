<template>
  <div class="tm-slice tm-cards tm-cards-default">
    <div v-if="!slice.primary.slider" class="uk-container uk-container-large">
      <div
        class="uk-grid uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@m"
        :class="`uk-flex-${slice.primary.alignment}`"
        uk-grid
      >
        <div v-for="(item, index) in slice.items" :key="index">
          <Card :slice="slice" :card="item" />
        </div>
      </div>
    </div>
    <div v-else uk-slider>
      <div class="uk-container uk-container-large uk-position-relative">
        <div class="uk-slider-container">
          <ul
            class="uk-slider-items uk-grid uk-grid-match uk-child-width-1-2@s uk-child-width-1-3@m"
            :class="[
              `uk-flex-${slice.primary.alignment}`,
              { 'uk-child-width-1-4@l': slice.primary.maxColumns === '4' },
            ]"
          >
            <li v-for="(item, index) in slice.items" :key="index">
              <Card :slice="slice" :card="item" />
            </li>
          </ul>
        </div>
        <div :class="{ 'uk-light': this.isInverse }">
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
      <div :class="{ 'uk-light': this.isInverse }">
        <ul class="uk-slider-nav uk-dotnav uk-flex-center uk-margin-top"></ul>
      </div>
    </div>
  </div>
</template>