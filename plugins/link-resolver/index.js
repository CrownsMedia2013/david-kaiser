import config from '../../slicemachine.config.json'

let store = null 

export default (doc) => {
  store = store || doc.store

  const prefix = doc.lang === config.defaultLocale ? '' : `/${doc.lang}`

  if (doc.isBroken) {
    return '/404'
  }

  switch (doc.type) {
    case 'page':
      if (doc.uid === store?.state.prismic.startPageUID) {
        return prefix || '/';
      }

      return `${prefix}/${doc.uid}`

    default:
      return '/'
      //return `#${doc.id || ''}`
  }
}