import Vue from 'vue'

export const state = () => ({
  iconData: {}
})

export const mutations = {
  setIconData (state, { id, iconData }) {
    Vue.set(state.iconData, id, iconData)
  }
}