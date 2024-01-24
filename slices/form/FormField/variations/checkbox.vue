<template>
  <div class="uk-width-1-1">
    <label class="uk-form-label" for="form-stacked-text">
      {{ slice.primary.label }}
    </label>
    <div class="uk-form-controls">
      <label
        ><input
          class="uk-checkbox"
          type="checkbox"
          :required="slice.primary.required"
        />
        {{ slice.primary.text }}</label
      >
    </div>
    <PrismicRichText
      class="tm-form-descripion"
      :field="slice.primary.description"
    />
  </div>
</template>