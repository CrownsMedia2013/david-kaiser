window.onNuxtReady(async (app) => {
  if (window.location.pathname === '/slice-simulator') {
    Object.defineProperty(window, 'prismic', {
      value: {},
      writable: false
    })
  }
})