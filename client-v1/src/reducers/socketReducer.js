const xtend = require('xtend')

module.exports = (socketConnection, action) => {
  switch (action.type) {
    case 'init_socket_connection':
      return action.socketConnection
    case 'join_room':
      const roomSocket = new WebSocket(`ws://162.243.186.234:4850/room/${action.roomName}`)
      roomSocket.onmessage = ({ data }) => {
        const message = JSON.parse(data)
        action.dispatch(xtend(message, {fromSocket: true}))
      }
      return roomSocket
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
