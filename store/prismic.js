import { data } from "autoprefixer"

export const state = () => ({
  alternateLanguages: [],
  settings: {},
  navigation: {},
  startPageUID: null,
  defaultHeader: null,
  defaultFooter: null,
})

export const mutations = {
  setAlternateLanguages(state, alternateLanguages) {
    state.alternateLanguages = alternateLanguages
  },
  setSettings(state, settings) {
    state.settings = settings
    state.startPageUID = settings?.data?.startPage?.uid
  },
  setDefaultHeader(state, header) {
    state.defaultHeader = header
  },
  setDefaultFooter(state, footer) {
    state.defaultFooter = footer
  },
  setNavigation(state, navigation) {
    state.navigation = navigation
  }
}

export const actions = {
  async load(store, { lang }) {
    const navigation = await this.$prismic.api.getSingle('navigation', { lang })
    const settings = await this.$prismic.api.getSingle('settings', { lang })
    const defaultHeaderID = settings?.data?.defaultHeader?.id
    const defaultFooterID = settings?.data?.defaultFooter?.id
    const defaultHeader = await this.$prismic.api.getByID(defaultHeaderID || '')
    const defaultFooter = await this.$prismic.api.getByID(defaultFooterID || '')
    
    store.commit('setNavigation', navigation)
    store.commit('setSettings', settings)
    store.commit('setDefaultHeader', defaultHeader)
    store.commit('setDefaultFooter', defaultFooter)
  },
  async documentLoad(store, { document = { alternate_languages: [] } }) {
    store.commit('setAlternateLanguages', document.alternate_languages)
  },
}
