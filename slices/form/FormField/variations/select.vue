<template>
  <div
    class="uk-width-1-1"
    :class="{ 'uk-width-1-2@m': slice.primary.width === 'half' }"
  >
    <label class="uk-form-label" for="form-stacked-text">
      {{ slice.primary.label }}
    </label>
    <div class="uk-form-controls">
      <select class="uk-select" :required="slice.primary.required">
        <option v-if="slice.primary.placeholder" disabled selected>
          {{ slice.primary.placeholder }}
        </option>
        <option v-for="(item, index) in slice.items" :value="item.option">
          {{ item.option }}
        </option>
      </select>
    </div>
    <PrismicRichText
      class="tm-form-descripion"
      :field="slice.primary.description"
    />
  </div>
</template>