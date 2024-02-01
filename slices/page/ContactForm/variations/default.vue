<template>
  <div
    class="tm-slice tm-contact-form tm-contact-form-default"
    :class="{ 'uk-light': isInverse }"
    v-if="formFields.data"
  >
    <div class="uk-container uk-container-large">
      <form class="uk-grid uk-grid-small" uk-grid>
        <FormField
          v-for="(field, index) in formFields.data.slices"
          :slice="field"
          :key="index"
        />
        <div class="uk-width-1-1 uk-flex uk-flex-center">
          <input
            class="uk-button uk-button-primary tm-contact-form-default-button uk-margin-top"
            type="submit"
            ref="submit"
            :value="formFields.data.sendButtonLabel"
          />
        </div>
      </form>
    </div>
  </div>
</template>