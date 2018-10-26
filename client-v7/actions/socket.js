module.exports = {
  init: () => null,
  joinRoom: (_, room, actions) => {
    const roomSocket = new WebSocket(`ws://localhost:4850/room/${room}`)
    roomSocket.onmessage = ({ data }) => {
      const message = JSON.parse(data)
      actions[message.action](message.args)
    }
    return roomSocket
  },
  emitVote: (socketConnection, {user, card}) => {
    socketConnection.send(JSON.stringify({
      action: 'vote',
      args: {user, card}
    }))
    return socketConnection
  },
  emitReveal: (socketConnection) => {
    socketConnection.send(JSON.stringify({
      action: 'reveal'
    }))
    return socketConnection
  },
  emitClear: (socketConnection) => {
    socketConnection.send(JSON.stringify({
      action: 'clear'
    }))
    return socketConnection
  }
}
