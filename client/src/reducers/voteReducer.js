const xtend = require('xtend')

module.exports = (cards, action) => {
  switch (action.type) {
    case 'on_vote':
      const newCards = xtend(cards, { [action.user]: action.card })
      return newCards
    default:
      return cards
  }
}
