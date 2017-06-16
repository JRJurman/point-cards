module.exports = (socketConnection, action) => {
  switch (action.type) {
    case 'init_socket_connection':
      return socketConnection
    default:
      return socketConnection
  }
}
