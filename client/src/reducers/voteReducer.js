const xtend = require('xtend')

module.exports = (cards, action) => {
  switch (action.type) {
    case 'vote':
      const newCards = xtend(cards, { [action.user]: action.card })
      if (action.card === '') {
        delete newCards[action.user]
      }
      return newCards
    case 'clear':
      return {}
    default:
      return cards
  }
}
