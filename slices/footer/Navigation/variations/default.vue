<template>
  <div class="tm-footer-nav tm-footer-nav-default">
    <div
      v-if="$notEmpty(slice.primary.title)"
      class="tm-title tm-footer-column-title"
    >
      {{ $prismic.asText(slice.primary.title) }}
    </div>
    <ul class="uk-list uk-margin-remove-bottom">
      <li
        v-for="(item, index) in slice.items"
        v-if="$notEmpty(item.text)"
        :key="index"
      >
        <DocumentLink :field="item.link">
          <span class="tm-text-break">{{ $prismic.asText(item.text) }}</span>
        </DocumentLink>
      </li>
    </ul>
  </div>
</template>