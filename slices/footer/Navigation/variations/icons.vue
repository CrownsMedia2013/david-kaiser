<template>
  <div class="tm-footer-nav tm-footer-nav-icons">
    <div
      v-if="$notEmpty(slice.primary.title)"
      class="tm-title tm-footer-column-title"
    >
      {{ $prismic.asText(slice.primary.title) }}
    </div>
    <ul class="uk-list">
      <li v-for="(item, index) in slice.items" :key="index">
        <DocumentLink :field="item.link" class="uk-flex uk-flex-top">
          <div class="uk-margin-auto-bottom">
            <Icon :icon="item.icon" class="uk-margin-small-right" />
          </div>
          <div class="uk-flex-auto">
            <div class="tm-title tm-text-pre">{{ $prismic.asText(item.label) }}</div>
            <div class="tm-text-pre">{{ $prismic.asText(item.text) }}</div>
          </div>
        </DocumentLink>
      </li>
    </ul>
  </div>
</template>