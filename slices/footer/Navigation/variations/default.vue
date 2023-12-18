<template>
  <div class="tm-footer-nav tm-footer-nav-default">
    <div v-if="$notEmpty(slice.primary.title)" class="tm-title tm-footer-column-title ">
      {{ $prismic.asText(slice.primary.title) }}
    </div>
    <ul class="uk-list">
      <li v-for="(item, index) in slice.items" :key="index">
        <DocumentLink :field="item.link" class="tm-text-pre">
          {{ $prismic.asText(item.text) }}
        </DocumentLink>
      </li>
    </ul>
  </div>
</template>