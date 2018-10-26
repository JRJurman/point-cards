const Tram = require('tram-one')
require("babel-polyfill")

const app = new Tram({
  defaultRoute: '/'
})

app.addRoute('/', require('./pages/home-page'))
app.addRoute('/room/:room', require('./pages/room-page'))

app.addActions({
  card: require('./actions/card'),
  room: require('./actions/room'),
  user: require('./actions/user'),
  visibility: require('./actions/visibility'),
  vote: require('./actions/vote'),
  socket: require('./actions/socket')
})

app.start('.main')
