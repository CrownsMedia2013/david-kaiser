<template>
  <div
    class="tm-header"
    :class="[
      `uk-background-${backgroundColor}`,
      {
        'uk-light': isInverse,
        'uk-position-absolute': isTransparent,
        'uk-invisible': !isReady,
      },
    ]"
    :uk-sticky="stickyOptions"
    @active="onStickyActive"
    @inactive="onStickyInactive"
  >
    <div class="uk-navbar-container">
      <div class="uk-container uk-container-large">
        <div uk-navbar="boundary: .uk-navbar-container" ref="navbar">
          <div
            class="uk-navbar-left uk-position-absolute"
            v-if="logo"
            ref="logoNav"
          >
            <NuxtLink to="/" class="uk-navbar-item uk-logo">
              <NuxtImg
                :src="logo.url"
                :alt="logo.alt"
                height="180"
                @load="onLogoLoad"
              />
            </NuxtLink>
          </div>
          <div v-if="data.slices.length" class="uk-navbar-right">
            <ul
              :hidden="isReady && !hasEnoughSpace"
              class="uk-navbar-nav"
              ref="desktopNav"
            >
              <template v-for="(slice, index) in data.slices">
                <NavItem :slice="slice" :key="index" />
              </template>
            </ul>
            <ul class="tm-navbar-icons uk-navbar-nav">
              <li :hidden="hasEnoughSpace">
                <a href="#mobile-menu" uk-toggle>
                  <icon icon="clarity:menu-line" />
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
    <div id="mobile-menu" uk-offcanvas>
      <div class="uk-offcanvas-bar">
        <ul class="uk-nav uk-nav-default uk-nav-parent-icon" uk-nav>
          <template v-for="(slice, index) in data.slices">
            <nav-item :slice="slice" :vertical="true" :key="index" />
          </template>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
import invertible from '@/mixins/invertible'
import doc from '@/mixins/doc'
import NavItem from '@/slices/header/NavItem'

export default {
  name: 'PageHeader',
  mixins: [invertible, doc],
  components: {
    NavItem
  },
  props: {
    document: {
      type: Object,
      required: true
    }
  },
  data: function () {
    let data = this.document.data
    data.backgroundColor = data.backgroundColor || 'light'
    data.transparent = data.transparent || false
    data.sticky = data.sticky || false

    if (data.sticky === 'false') {
      data.sticky = false
    }

    return {
      isStickyActive: false,
      isInverseTransparent: false,
      hasEnoughSpace: true,
      desktopNavWidth: 0,
      logoWidth: 0,
      isReady: false,
    }
  },
  computed: {
    logo() {
      return this.isInverse ? this.data.inverseLogo : this.data.logo
    },
    backgroundColor() {
      return this.isStickyActive || !this.isTransparent ?
        this.data.backgroundColor : 'transparent'
    },
    isInverse() {
      console.log('this.isStickyActive', this.isStickyActive)
      console.log('invertible.computed.isInverse.call(this)', invertible.computed.isInverse.call(this))
      return !this.isStickyActive && this.$parent.hasInverseTransparentHeader ||
        invertible.computed.isInverse.call(this)
    },
    isTransparent() {
      return this.data.transparent
    },
    isSticky() {
      return this.data.sticky && this.data.sticky !== false
    },
    stickyOptions() {
      if (!this.isSticky) return undefined

      let options = 'top: 320; cls-active: tm-header-sticky;'
      options += this.data.sticky === 'on scroll up' ? 'show-on-up: true;' : ''

      return options
    },
  },
  methods: {
    onResize() {
      this.hasEnoughSpace = this.$refs.navbar?.clientWidth > this.desktopNavWidth + this.logoWidth + 50
    },
    onStickyActive() {
      this.isStickyActive = true
      this.onResize()
    },
    onStickyInactive() {
      this.isStickyActive = false
      this.onResize()
    },
    onLogoLoad() {
      this.logoWidth = this.$refs.logoNav?.clientWidth || 0
      this.onResize()
      this.isReady = true
    },
  },
  mounted() {
    this.jQuery(() => {
      this.desktopNavWidth = this.$refs?.desktopNav?.clientWidth || 0;
      window.addEventListener('resize', this.onResize)

      if (!this.$refs.logo) {
        this.onResize()
        this.isReady = true
      }
    })
  },
  destroyed() {
    this.isReady = false
    window.removeEventListener('resize', this.onResize)
  },
}
</script>