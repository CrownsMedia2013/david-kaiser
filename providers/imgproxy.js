import { joinURL } from 'ufo'
import { createOperationsGenerator } from '~image'

const operationsGenerator = createOperationsGenerator()

export const getImage = (
  src,
  { modifiers = {}, baseURL } = {}
) => {

  if (!src) {
    return ''
  }

  const field = modifiers.field
  const dimensions = field?.dimensions
  src = field?.url || src

  if (!baseURL) {
    // also support runtime config 
    // baseURL = useRuntimeConfig().public.siteUrl
  }

  if (modifiers.mw && dimensions) {
    modifiers.w = dimensions.width > modifiers.mw ? modifiers.mw : dimensions.width
    delete modifiers.mw
  }

  if (modifiers.mh && dimensions) {
    modifiers.h = dimensions.height > modifiers.mh ? modifiers.mh : dimensions.height
    delete modifiers.mh
  }

  let operations = operationsGenerator(modifiers)

  if (!operations) {
    return joinURL(baseURL, src)
  }

  const separator = src.includes('?') ? '&' : '?'

  operations = operations.replace('width=', 'w=')
  operations = operations.replace('height=', 'h=')

  return {
    url: joinURL(baseURL, src + (operations ? separator + operations : '')),
  }
}