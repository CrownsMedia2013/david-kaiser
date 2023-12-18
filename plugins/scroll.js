export default (context) => {
  context.app.router.options.scrollBehavior = () => {
    return { left: 0, top: 0 }
  }
}