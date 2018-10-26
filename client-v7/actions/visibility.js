module.exports = {
  init: () => false,
  reveal: () => true,
  clear: () => false,
  requestState: (visibility, _, actions) => {
    if (visibility) {
      actions.emitReveal()
    }
    return visibility
  }
}
