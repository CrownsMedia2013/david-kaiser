<template>
  <div
    class="tm-slice tm-contact-form tm-contact-form-default"
    :class="{ 'uk-light': isInverse }"
  >
    <div class="uk-container uk-container-large">
      <form class="uk-grid uk-grid-small" uk-grid>
        <FormField
          v-for="(field, index) in formFields"
          :slice="field"
          :key="index"
        />
        <div class="uk-width-1-1 uk-flex uk-flex-center">
          <input
            class="uk-button uk-button-primary uk-margin-top"
            type="submit"
            ref="submit"
          />
        </div>
      </form>
    </div>
  </div>
</template>