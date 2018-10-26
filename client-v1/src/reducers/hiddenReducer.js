module.exports = (hidden, action) => {
  switch (action.type) {
    case 'reveal':
      return false
    case 'clear':
      return true
    default:
      return hidden
  }
}
