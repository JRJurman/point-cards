module.exports = (socketConnection, action) => {
  switch (action.type) {
    case 'init_socket_connection':
      return action.socketConnection
    case 'select_card':
      const newCard = (action.card !== action.oldCard) ? action.card : ''
      socketConnection.send(JSON.stringify({
        type: 'vote',
        card: newCard,
        user: action.user
      }))
      return socketConnection
    case 'reveal':
      if (!action.fromSocket) {
        socketConnection.send(JSON.stringify({
          type: 'reveal'
        }))
      }
      return socketConnection
    case 'clear':
      if (!action.fromSocket) {
        socketConnection.send(JSON.stringify({
          type: 'clear'
        }))
      }
      return socketConnection
    default:
      return socketConnection
  }
}
