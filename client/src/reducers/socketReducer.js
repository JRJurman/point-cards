module.exports = (socketConnection, action) => {
  switch (action.type) {
    case 'init_socket_connection':
      return socketConnection
    case 'select_card':
      const newCard = (action.card !== action.oldCard) ? action.card : ''
      socketConnection.send(JSON.stringify({
        type: 'vote',
        card: newCard,
        user: action.user
      }))
      return socketConnection
    default:
      return socketConnection
  }
}
