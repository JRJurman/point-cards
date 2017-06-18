const Tram = require('tram-one')
const xtend = require('xtend')
const cardReducer = require('./reducers/cardReducer')
const userReducer = require('./reducers/userReducer')
const voteReducer = require('./reducers/voteReducer')
const hiddenReducer = require('./reducers/hiddenReducer')
const socketReducer = require('./reducers/socketReducer')

const pageWrapper = require('./elements/page-wrapper')
const room = require('./pages/room')

const app = new Tram({defaultRoute: '/'})

const html = Tram.html({
  'page-wrapper': pageWrapper,
  room
})

const roomPage = (state) => {
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

const defaultName = localStorage.getItem('name') || ''
app.addReducer('socket', socketReducer, undefined)

app.addReducer('card', cardReducer, '')
app.addReducer('user', userReducer, defaultName)
app.addReducer('vote', voteReducer, {})
app.addReducer('hidden', hiddenReducer, true)
app.addRoute('/room/:room', roomPage)

app.start('.main')
