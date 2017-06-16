const Tram = require('tram-one')

const pageWrapper = require('../elements/page-wrapper')
const ticketLink = require('../elements/link')
const card = require('../elements/card')
const cardWell = require('../elements/card-well')
const nameInput = require('../elements/name-input')
const cardSelector = require('../elements/card-selector')
const html = Tram.html({
  'page-wrapper': pageWrapper,
  'ticket-link': ticketLink,
  'card': card,
  'card-well': cardWell,
  'name-input': nameInput,
  'card-selector': cardSelector
})

const nameInputStyle = `
  margin: 1.35em 0em 0em 1.35em;
`

module.exports = (attrs, children) => {
  const votes = attrs.votes && Object.keys(attrs.votes).map(user => html`
    <card value=${attrs.votes[user]} user=${user}></card>
  `)

  return html`
    <page-wrapper>
      <ticket-link href="https://jira.roving.com/browse/HYPO-57"></ticket-link>
      <card-well>
        ${votes}
      </card-well>
      <name-input
        name=${attrs.user}
        onnameset=${attrs.onnameset}
        style=${nameInputStyle}>
      </name-input>
      <card-selector
        ${attrs.user !== '' ? '' : 'disabled'}
        onselectcard=${attrs.onselectcard}
        selected=${attrs.selected}>
      </card-selector>
    </page-wrapper>
  `
}
