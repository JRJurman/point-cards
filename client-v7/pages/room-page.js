const Tram = require('tram-one')

const pageWrapper = require('../elements/page-wrapper')
const room = require('../elements/room')

const html = Tram.html({
  'page-wrapper': pageWrapper,
  room
})

module.exports = (store, actions, params) => {
  if (!store.socket) {
    actions.joinRoom(params.room)
  }

  const onselectcard = (card) => () => {
    // if this is the selected card, clear the selection
    if (card === store.card) {
      actions.selectCard('')
      actions.vote({card: '', user: store.user})
    } else {
      actions.selectCard(card)
      actions.emitVote({card, user: store.user})
    }
  }

  const onnameset = (event) => {
    actions.setName(event.target.value)
  }

  const onreveal = () => {
    actions.emitReveal()
  }

  const onclear = () => {
    actions.emitClear()
  }

  return html`
    <page-wrapper>
      <room
        votes=${store.vote}
        user=${store.user}
        selected=${store.card}
        ${store.visibility ? '' : 'hidden'}
        onselectcard=${onselectcard}
        onnameset=${onnameset}
        onreveal=${onreveal}
        onclear=${onclear}>
      </room>
    </page-wrapper>
  `
}
