const Tram = require('tram-one')

const card = require('../elements/card')
const cardWell = require('../elements/card-well')
const nameInput = require('../elements/name-input')
const userControls = require('../elements/user-controls')
const cardSelector = require('../elements/card-selector')
const html = Tram.html({
  'card': card,
  'card-well': cardWell,
  'name-input': nameInput,
  'card-selector': cardSelector,
  'user-controls': userControls
})

const controlFlex = `
  display: flex;
  flex-flow: wrap;
  margin: 0 2rem 0 2rem;
  justify-content: space-between;
`

const nameInputStyle = `
  margin-top: 1rem;
`

const controlsStyle = `
  margin-top: 1rem;
`

const wellStyle = `
  margin-top: 1rem;
`

module.exports = (attrs, children) => {
  const votes = Object.keys(attrs.votes).map(user => html`
    <card
      value=${attrs.votes[user]}
      user=${user}
      ${attrs.hidden ? 'hidden' : ''}>
    </card>
  `)

  return html`
    <div>
      <div style=${controlFlex}>
        <name-input style=${nameInputStyle}
          name=${attrs.user}
          onnameset=${attrs.onnameset}>
        </name-input>
        <user-controls
          action=${attrs.hidden ? 'Reveal': 'Hide'}
          style=${controlsStyle}
          onclear=${attrs.onclear}
          onaction=${attrs.onaction}>
        </user-controls>
      </div>
      <card-well style=${wellStyle}>
        ${votes}
      </card-well>
      <card-selector
        ${attrs.user !== '' ? '' : 'disabled'}
        onselectcard=${attrs.onselectcard}
        selected=${attrs.selected}>
      </card-selector>
    </div>
  `
}
