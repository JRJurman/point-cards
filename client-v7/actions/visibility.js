module.exports = {
  init: () => false,
  reveal: () => true,
  hide: () => false,
  clear: () => false,
  requestState: (visibility, _, actions) => {
    if (visibility) {
      actions.emitReveal()
    }
    return visibility
  }
}
