module.exports = (selected, action) => {
  switch (action.type) {
    case 'select_card':
      action.socket.send(JSON.stringify({
        card: action.card,
        user: action.user
      }))
      return action.card
    default:
      return selected
  }
}
