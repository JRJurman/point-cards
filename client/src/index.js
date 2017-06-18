const Tram = require('tram-one')

const cardReducer = require('./reducers/cardReducer')
const userReducer = require('./reducers/userReducer')
const voteReducer = require('./reducers/voteReducer')
const hiddenReducer = require('./reducers/hiddenReducer')
const socketReducer = require('./reducers/socketReducer')

const roomPage = require('./pages/room-page')
const homePage = require('./pages/home-page')

const app = new Tram({defaultRoute: '/'})

const defaultName = localStorage.getItem('name') || ''

app.addReducer('socket', socketReducer, undefined)
app.addReducer('card', cardReducer, '')
app.addReducer('user', userReducer, defaultName)
app.addReducer('vote', voteReducer, {})
app.addReducer('hidden', hiddenReducer, true)

app.addRoute('/room/:room', roomPage)
app.addRoute('/', homePage)

app.start('.main')
