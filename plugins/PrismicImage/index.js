import Vue from 'vue'
import PrismicImg from './PrismicImg'

Vue.component('PrismicImg', PrismicImg)

export default (context, inject) => {
  inject('prismicImg', (field, options) => {
    if (!field?.url) {
      return
    }

    if (!options) {
      return field.url
    }

    const dimensions = field.dimensions || {}
    const parameters = {
      w: options.width,
      h: options.height,
      q: options.qualtiy
    }

    if (options.maxWidth < dimensions.width) {
      parameters.w = options.maxWidth
    }

    if (options.maxHeight < dimensions.height) {
      parameters.h = options.maxHeight
    }

    const url = new URL(field.url)

    for (var key in parameters) {
      parameters[key] && url.searchParams.set(key, parameters[key])
    }

    return url
  })
}