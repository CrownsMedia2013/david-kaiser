<template>
  <div
    class="uk-width-1-1"
    :class="{ 'uk-width-1-2@m': slice.primary.width === 'half' }"
  >
    <label class="uk-form-label" for="form-stacked-text">
      {{ slice.primary.label }}
    </label>
    <div class="uk-form-controls">
      <input
        class="uk-input"
        type="text"
        :placeholder="slice.primary.placeholder"
        :required="slice.primary.required"
      />
    </div>
    <PrismicRichText
      class="tm-form-descripion"
      :field="slice.primary.description"
    />
  </div>
</template>