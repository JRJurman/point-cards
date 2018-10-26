module.exports = {
  init: () => ({}),
  vote: (cards, vote) => {
    const newCards = Object.assign({}, cards, { [vote.user]: vote.card })
    if (vote.card === '') {
      delete newCards[vote.user]
    }
    return newCards
  },
  clear: () => ({}),
  requestState: (cards, _, actions) => {
    // if we have cards to share, share them on request
    if (Object.keys(cards).length > 0) {
      actions.emitSetCards(cards)
    }
    return cards
  },
  setCards: (cards, newCards) => newCards
}
