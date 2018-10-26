module.exports = (roomName, action) => {
  switch (action.type) {
    case 'set_room':
      return action.roomName
    case 'join_room':
      history.pushState({}, '', `/room/${roomName}`)
      return roomName
    default:
      return roomName
  }
}
