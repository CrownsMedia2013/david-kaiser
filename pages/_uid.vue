<template>
  <div class="tm-layout">
    <page-header v-if="header" :document="header" />
    <main class="tm-page">
      <page-section
        v-for="(section, index) in sections"
        :document="section"
        :key="index"
      />
    </main>
    <page-footer v-if="footer" :document="footer" />
  </div>
</template>

<script>
import route from '@/mixins/route';
import doc from '@/mixins/doc';
import PageHeader from '@/components/PageHeader';
import PageSection from '@/components/PageSection';
import PageFooter from '@/components/PageFooter';

export default {
  mixins: [route, doc],
  components: {
    PageHeader,
    PageSection,
    PageFooter,
  },
  async asyncData({ $prismic, params, store, i18n, redirect }) {
    const lang = i18n.locale
    const uid = params.uid || store.state.prismic.startPageUID || '';
    const document = await $prismic.api.getByUID('page', uid, { lang });
    await store.dispatch('prismic/documentLoad', { document });

    if (document && uid) {
      const data = document.data
      const sectionIDs = [];

      data.sections?.forEach(link => {
        link.section.id && sectionIDs.push(link.section.id);
      });

      let sections = await $prismic.api.getByIDs(sectionIDs);
      sections = sections.results;

      return { document, data, sections };
    } else {
      redirect(404, '/404');
    }
  },
  async middleware({ $prismic, params, store, i18n }) {
    const lang = i18n.locale;
    await store.dispatch('prismic/load', { lang });
  },
  computed: {
    firstSection() {
      return this.sections[0]
    },
    firstSlice() {
      return this.firstSection?.data.slices[0]
    },
    hasInverseTransparentHeader() {
      if (!this.hasTransparentHeader) return false

      return this.firstSlice?.slice_type === 'slideshow' && 
        this.$isInverseColor(this.firstSlice.data?.color || 'dark') ||
        this.firstSection && 
        this.$isInverseColor(this.firstSection.data.backgroundColor)
    }
  },
  created() {
    if (this.hasInverseTransparentHeader) {
      if (this.firstSlice?.slice_type === 'slideshow') {
        this.firstSlice.primary.transparentHeader = true
      } else if (this.firstSection) {
        this.firstSection.data.transparentHeader = true
      }
    }
    /*this.header.data.isInverseTransparent = false
    if (this.hasTransparentHeader) {
      this.header.data.isInverseTransparent = false
      console.log('transparentHeader')
      if (this.firstSlice?.slice_type === 'slideshow') {
        console.log('isSlideshow')
        this.firstSlice.primary.transparentHeader = true
        this.header.data.isInverseTransparent = true

        this.header.data.isInverseTransparent = 
          this.$isInverseColor(this.firstSlice.data?.color || 'dark')
      } else if (this.firstSection) {
        this.firstSection.data.transparentHeader = true

        this.header.data.isInverseTransparent = 
          this.$isInverseColor(this.firstSection.data.backgroundColor)
      }
    }*/
  },
}
</script>
