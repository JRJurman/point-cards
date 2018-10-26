module.exports = {
  init: () => ({}),
  vote: (cards, vote) => {
    const newCards = Object.assign({}, cards, { [vote.user]: vote.card })
    if (vote.card === '') {
      delete newCards[vote.user]
    }
    return newCards
  },
  clear: () => ({})
}
