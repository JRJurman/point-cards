const Tram = require('tram-one')
const user = require('./pages/user')
const cardReducer = require('./reducers/cardReducer')
const userReducer = require('./reducers/userReducer')
const voteReducer = require('./reducers/voteReducer')
const socketReducer = require('./reducers/socketReducer')

const app = new Tram({defaultRoute: '/'})

const html = Tram.html({
  user
})

const home = (state) => {
  const onselectcard = (card) => () => {
    state.dispatch({
      type: 'select_card',
      card,
      socket: state.socket,
      user: state.user
    })
  }

  const onnameset = (event) => {
    const name = event.target.value
    state.dispatch({type: 'set_name', name})
  }

  return html`
    <user
      votes=${state.vote}
      user=${state.user}
      onselectcard=${onselectcard}
      onnameset=${onnameset}
      selected=${state.card}>
    </user>
  `
}

const connection = new WebSocket('ws://localhost:4850/')
connection.onmessage = ({ data }) => {
  const message = JSON.parse(data)
  console.log(message)
  app.store.dispatch({
    type: 'on_vote',
    user: message.user,
    card: message.card
  })
}
app.addReducer('socket', socketReducer, connection)

app.addReducer('card', cardReducer, '')
app.addReducer('user', userReducer, '')
app.addReducer('vote', voteReducer, {})
app.addRoute('/', home)

app.start('.main')
