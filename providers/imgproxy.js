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

  if (!baseURL) {
    // also support runtime config 
    // baseURL = useRuntimeConfig().public.siteUrl
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