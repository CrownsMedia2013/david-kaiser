
export default (context, inject) => {
  inject('isInverseColor', (color) => {
    return [ 'dark', 'primary', 'secondary' ].includes(color)
  })
}