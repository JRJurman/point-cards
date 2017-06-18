const Tram = require('tram-one')
const xtend = require('xtend')

const pageWrapper = require('../elements/page-wrapper')
const room = require('../elements/room')

const html = Tram.html({
  'page-wrapper': pageWrapper,
  room
})

module.exports = (state) => {
  if (!state.socket) {
    const roomSocket = new WebSocket(`ws://192.168.1.18:4850/room/${state.room}`)
    roomSocket.onmessage = ({ data }) => {
      const message = JSON.parse(data)
      state.dispatch(xtend(message, {fromSocket: true}))
    }
    state.dispatch({
      type: 'init_socket_connection',
      socketConnection: roomSocket
    })
  }

  const onselectcard = (card) => () => {
    state.dispatch({
      type: 'select_card',
      card,
      oldCard: state.card,
      user: state.user
    })
  }

  const onnameset = (event) => {
    const name = event.target.value
    state.dispatch({type: 'set_name', name})
  }

  const onreveal = () => {
    state.dispatch({type: 'reveal'})
  }

  const onclear = () => {
    state.dispatch({type: 'clear'})
  }

  return html`
    <page-wrapper>
      <room
        votes=${state.vote}
        user=${state.user}
        selected=${state.card}
        ${state.hidden ? 'hidden' : ''}
        onselectcard=${onselectcard}
        onnameset=${onnameset}
        onreveal=${onreveal}
        onclear=${onclear}>
      </room>
    </page-wrapper>
  `
}
