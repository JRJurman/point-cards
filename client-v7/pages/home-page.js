const Tram = require('tram-one')

const pageWrapper = require('../elements/page-wrapper')
const home = require('../elements/home')
const html = Tram.html({
  'page-wrapper': pageWrapper,
  'home': home
})

module.exports = (store, actions) => {
  const onjoinroom = () => {
    history.pushState({}, '', `/room/${store.room}`)
  }

  const onroomset = (event) => {
    if (event.keyCode === 13) {
      onjoinroom()
    }
    actions.setRoom(event.target.value)
  }

  return html`
    <page-wrapper>
      <home
        onjoinroom=${onjoinroom}
        onroomset=${onroomset}
        room=${store.room}>
      </home>
    </page-wrapper>
  `
}
