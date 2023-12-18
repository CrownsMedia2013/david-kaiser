export default {
  computed: {
    seoMetadata() {
      return {
        title:
          this.$prismic.asText(this.data.title) ||
          this.data.metaTitle ||
          this.$store.settings?.data.metaTitle,
        description:
          this.data.metaDescription ||
          this.$store.settings?.data.metaDescription,
        socialMediaImage:
          this.data.socialMediaImage?.url ||
          this.$store.settings?.data.socialMediaImage?.url
      }
    },
    header() {
      return this.$store.state.prismic.defaultHeader
    },
    footer() {
      return this.$store.state.prismic.defaultFooter
    },
    hasTransparentHeader() {
      return this.header?.data.transparent
    },
    hasInverseTransparentHeader() {
      return this.isInverse
    },
  },
  head() {
    const seoMetadata = this.seoMetadata
    const nuxtMeta = []
    const nuxtHead = {
      meta: nuxtMeta,
      link: []
    }

    const baseUrl = process.env.baseUrl
    const type = seoMetadata.type
    const title =
      seoMetadata.title ||
      this.$store.state.settings?.data.metaTitle

    const description =
      seoMetadata.description ||
      this.$store.state.settings?.data.metaDescription

    const socialMediaImage =
      seoMetadata.socialMediaImage ||
      this.$store.state.settings?.data.socialMediaImage?.url

    const favicon = this.$store.state.settings?.data.favicon?.url
    const favicons = []

    if (favicon) {
      [32, 57, 76, 96, 128, 192, 228,].forEach((s) => {
        nuxtHead.link.push({
          rel: 'icon',
          sizes: `${s}x${s}`,
          href: this.$img(favicon, { width: s })
        })
      });

      [120, 152, 180].forEach((s) => {
        nuxtHead.link.push({
          rel: 'apple-touch-icon',
          sizes: `${s}x${s}`,
          href: this.$img(favicon, { width: s }),
        })
      })

      nuxtHead.link.push({
        rel: 'shortcut icon',
        sizes: '196x196',
        href: this.$img(favicon, { width: 196 }),
      })
    }

    if (this.data.exclude) {
      nuxtMeta.push({ hid: 'robots', name: 'robots', content: 'noindex' })
    }

    if (baseUrl) {
      nuxtHead.link.push({
        rel: 'canocial',
        href: baseUrl.replace(/\/$/, '') + this.$prismic.linkResolver(this.document),
      })
    }

    if (type) {
      nuxtMeta.push({
        hid: 'og-type',
        property: 'og:type',
        content: seoMetadata.type,
      })
    }

    if (title) {
      nuxtHead.title = title
      nuxtMeta.push({
        hid: 'og-title',
        property: 'og:title',
        content: title,
      })
    }

    if (description) {
      nuxtMeta.push({
        hid: 'description',
        name: 'description',
        content: description,
      })
      nuxtMeta.push({
        hid: 'og-desc',
        property: 'og:description',
        content: description,
      })
    }

    if (socialMediaImage) {
      nuxtMeta.push({
        hid: 'og-image',
        property: 'og:image',
        content: socialMediaImage
      })
    }

    return nuxtHead
  },
  mounted() {
    this.jQuery(() => {
      this.$uikit.update()
    })
  },
}