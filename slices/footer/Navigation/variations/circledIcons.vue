<template>
  <div class="tm-footer-nav tm-footer-nav-circled-icons">
    <ul class="uk-grid" uk-grid>
      <li
        v-for="(item, index) in slice.items"
        v-if="$notEmpty(item.label, item.text)"
        :key="index"
      >
        <DocumentLink :field="item.link" class="uk-flex uk-flex-top">
          <div class="tm-footer-circled-icon">
            <div class="tm-icon-circle">
              <Icon :icon="item.icon" class="uk-block" />
            </div>
          </div>
          <div>
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