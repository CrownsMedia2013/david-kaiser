<template>
  <footer
    class="tm-footer"
    :class="[
      `uk-background-${data.backgroundColor}`,
      {
        'tm-footer-single-logo': isSingleLogo,
        'tm-footer-single-icons': isSingleIcons,
        'uk-light': isInverse,
      },
    ]"
  >
    <div class="uk-container uk-container-large">
      <div class="tm-footer-top">
        <div class="uk-grid uk-grid-large" uk-grid>
          <div v-if="logo" class="tm-footer-logo uk-margin-auto-right">
            <NuxtLink to="/">
              <NuxtImg :src="logo.url" :alt="logo.alt" width="500" />
            </NuxtLink>
            <ul
              v-if="hasSocialIcons && isSingleLogo"
              class="uk-grid-small uk-flex-center uk-margin-medium-top"
              uk-grid
            >
              <li v-for="(item, index) in data.socialIcons" :key="index">
                <DocumentLink :field="item.link" class="uk-icon-button">
                  <Icon :icon="item.icon" />
                </DocumentLink>
              </li>
            </ul>
          </div>
          <div
            v-if="!isSingleLogo"
            class="tm-footer-columns uk-grid uk-grid-large uk-flex-beteen uk-child-width-auto"
            uk-grid
          >
            <template v-for="(slice, index) in data.slices">
              <div class="tm-footer-column" :key="index">
                <Navigation
                  v-if="slice.slice_type === 'navigation'"
                  :slice="slice"
                />
                <OpeningHours
                  v-else-if="slice.slice_type === 'opening_hours'"
                  :slice="slice"
                />
              </div>
            </template>
          </div>
        </div>
      </div>
      <hr class="uk-margin-remove" />
      <div class="tm-footer-bottom">
        <div
          class="uk-grid uk-grid-small uk-child-width-auto@s uk-flex-center uk-flex-middle"
          uk-grid
        >
          <div v-if="hasBottomNavigation">
            <div class="tm-footer-bottom-nav">
              <ul class="uk-grid uk-grid-small tm-footer-nav uk-flex-center" uk-grid>
                <li v-for="(item, index) in data.bottomNavigation" :key="index">
                  <DocumentLink :field="item.link">
                    {{ $prismic.asText(item.label) }}
                  </DocumentLink>
                </li>
              </ul>
            </div>
          </div>
          <div v-if="hasSocialIcons && !isSingleLogo">
            <div class="tm-footer-social-icons">
              <ul class=" uk-grid uk-grid-small tm-footer-nav uk-flex-center" uk-grid>
                <li v-for="(item, index) in data.socialIcons" :key="index">
                  <DocumentLink :field="item.link">
                    <Icon :icon="item.icon" />
                  </DocumentLink>
                </li>
              </ul>
            </div>
          </div>
          <div>
            <a href="#" class="tm-footer-scroll-top uk-margin-auto" uk-scroll>
              <Icon icon="la:arrow-up" />
            </a>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>
<script>
import invertible from '@/mixins/invertible'
import doc from '@/mixins/doc'
import Navigation from '@/slices/footer/Navigation'
import OpeningHours from '@/slices/footer/OpeningHours'

export default {
  name: 'PageFooter',
  mixins: [invertible, doc],
  props: {
    document: {
      type: Object,
      required: true,
    },
  },
  components: {
    Navigation,
    OpeningHours,
  },
  computed: {
    logo() {
      return this.isInverse ? this.data.inverseLogo : this.data.logo
    },
    isSingleLogo() {
      return this.data.slices.length === 0 && this.logo
    },
    isSingleIcons() {
      return this.data.slices.length === 1 &&
        this.data.slices[0].variation === 'circledIcons'
    },
    hasBottomNavigation() {
      return this.$notEmpty(this.data.bottomNavigation[0]?.label)
    },
    hasSocialIcons() {
      return !!this.data.socialIcons[0]?.icon
    }
  }
}
</script>