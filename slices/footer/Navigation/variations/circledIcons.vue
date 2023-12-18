<template>
  <div class="tm-footer-nav tm-footer-nav-circled-icons">
    <ul class="uk-grid" uk-grid>
      <li v-for="(item, index) in slice.items" :key="index">
        <DocumentLink :field="item.link" class="uk-flex uk-flex-top">
          <div class="tm-footer-circled-icon">
            <div class="tm-icon-circle">
              <Icon :icon="item.icon" class=" uk-block" />
            </div>
          </div>
          <div>
            <div class="tm-title tm-text-pre">{{ $prismic.asText(item.label) }}</div>
            <div class="tm-text-pre">{{ $prismic.asText(item.text) }}</div>
          </div>
        </DocumentLink>
      </li>
    </ul>
  </div>
</template>