module.exports = (selected, action) => {
  switch (action.type) {
    case 'select_card':
      return (action.card !== selected) ? action.card : ''
    case 'clear':
      return ''
    default:
      return selected
  }
}
