<template>
  <div class="tm-footer-nav tm-footer-nav-icons">
    <div
      v-if="$notEmpty(slice.primary.title)"
      class="tm-title tm-footer-column-title"
    >
      {{ $prismic.asText(slice.primary.title) }}
    </div>
    <ul class="uk-list uk-margin-remove-bottom">
      <li v-for="(item, index) in slice.items" :key="index">
        <DocumentLink :field="item.link" class="uk-flex uk-flex-top">
          <div class="uk-margin-auto-bottom uk-margin-small-right">
            <Icon :icon="item.icon" />
          </div>
          <div class="uk-flex-auto">
            <div v-if="$notEmpty(item.label)" class="tm-title">
              <span class="tm-text-break">{{
                $prismic.asText(item.label)
              }}</span>
            </div>
            <div v-if="$notEmpty(item.text)">
              <span class="tm-text-break">{{
                $prismic.asText(item.text)
              }}</span>
            </div>
          </div>
        </DocumentLink>
      </li>
    </ul>
  </div>
</template>