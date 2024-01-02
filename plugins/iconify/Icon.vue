<template>
  <svg
    v-if="body"
    xmlns="http://www.w3.org/2000/svg"
    xmlns:xlink="http://www.w3.org/1999/xlink"
    aria-hidden="true"
    :width="attributes.width"
    :height="attributes.height"
    :viewBox="attributes.viewBox"
    v-html="body"
  />
</template>

<script>
import {
  getIconData,
  iconToSVG,
  defaultIconProps
} from '@iconify/utils/lib'

export default {
  name: 'Icon',
  props: {
    icon: String,
  },
  data() {
    return {
      body: null,
      attributes: null
    }
  },
  async fetch() {
    let id = this.icon

    if (!id) {
      return
    }

    if (id.indexOf(':') < 0) {
      id.replace('-', ':')
    }

    const split = id.split(':')
    const prefix = split[0]
    const name = split[1]

    if (!prefix || !name) {
      return defaultIconProps
    }

    let iconData = this.$store.state.iconify.iconData[id]

    if (!iconData) {
      const response = await fetch(
        `https://api.iconify.design/${prefix}.json?icons=${name}`
      ).then(res => res.json())

      if (!response?.icons) {
        return
      }

      iconData = getIconData(response, name, true)

      if (!iconData) {
        return
      }
      
      this.$store.commit('iconify/setIconData', { id, iconData })
    }

    const renderData = iconToSVG(iconData, defaultIconProps)

    this.attributes = renderData.attributes || {}
    this.body = renderData.body
  },
}
</script>
<style scoped>
  svg {
    display: inline-block;
    vertical-align: 'middle';
    width: 1em;
  }
</style>