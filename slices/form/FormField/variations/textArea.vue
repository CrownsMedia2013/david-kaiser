<template>
  <div class="uk-width-1-1">
    <label class="uk-form-label" for="form-stacked-text">
      {{ slice.primary.label }}
    </label>
    <div class="uk-form-controls">
      <textarea
        class="uk-textarea"
        rows="5"
        :placeholder="slice.primary.placeholder"
        :required="slice.primary.required"
      ></textarea>
    </div>
    <PrismicRichText
      class="tm-form-descripion"
      :field="slice.primary.description"
    />
  </div>
</template>