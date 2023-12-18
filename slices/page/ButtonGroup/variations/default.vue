<template>
  <div
    class="tm-slice tm-button-group tm-button-group-default"
    :class="{ 'uk-light': isInverse }"
  >
    <div
      class="uk-container uk-container-large"
      :class="`uk-text-${slice.primary.alignment}`"
    >
      <div
        v-if="slice.items"
        class="tm-button-group-buttons uk-grid uk-grid-small"
        :class="`uk-flex-${slice.primary.alignment}`"
        uk-grid
      >
        <div v-for="(item, index) in slice.items" class="" :key="index">
          <DocumentLink
            v-if="item.buttonLabel"
            :field="item.buttonLink"
            class="uk-button tm-button-group-button"
          >
            {{ item.buttonLabel }}
          </DocumentLink>
        </div>
      </div>
    </div>
  </div>
</template>