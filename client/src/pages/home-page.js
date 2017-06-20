const Tram = require('tram-one')

const pageWrapper = require('../elements/page-wrapper')
const home = require('../elements/home')
const html = Tram.html({
  'page-wrapper': pageWrapper,
  'home': home
})

module.exports = (state) => {
  const onjoinroom = () => {
    state.dispatch({
      type: 'join_room',
      roomName: state.room,
      dispatch: state.dispatch
    })
  }

  const onroomset = (event) => {
    if (event.keyCode === 13) {
      onjoinroom()
    }
    const roomName = event.target.value
    state.dispatch({
      type: 'set_room',
      roomName
    })
  }

  return html`
    <page-wrapper>
      <home
        onjoinroom=${onjoinroom}
        onroomset=${onroomset}
        room=${state.room}>
      </home>
    </page-wrapper>
  `
}
