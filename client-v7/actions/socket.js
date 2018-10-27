module.exports = {
  init: () => null,
  joinRoom: (_, room, actions) => {
    const roomSocket = new WebSocket(`ws://162.243.186.234:4850/room/${room}`)
    // const roomSocket = new WebSocket(`ws://localhost:4850/room/${room}`) // use for local debugging
    roomSocket.onmessage = ({ data }) => {
      const message = JSON.parse(data)
      actions[message.action](message.args)
    }

    // when the socket is ready, send a request for the latest data
    roomSocket.onopen = () => {
      roomSocket.send(JSON.stringify({
        action: 'requestState'
      }))
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
  emitHide: (socketConnection) => {
    socketConnection.send(JSON.stringify({
      action: 'hide'
    }))
    return socketConnection
  },
  emitClear: (socketConnection) => {
    socketConnection.send(JSON.stringify({
      action: 'clear'
    }))
    return socketConnection
  },
  emitSetCards: (socketConnection, cards) => {
    socketConnection.send(JSON.stringify({
      action: 'setCards',
      args: cards
    }))
    return socketConnection
  }
}
