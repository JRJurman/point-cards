const Tram = require('tram-one')

const card = require('./card')
const html = Tram.html({card})

const wellStyle = `
  display: flex;
  flex-flow: wrap;
  padding: 1em;
  font-size: 0.75em;
`

module.exports = (attrs, children) => {
  const defaultCards = [
    '0', '0.5', '1', '2', '3', '5',
    '8', '13', '20', '40', '100', '?', '∞'
  ].map(value => html`
    <card
      value=${value}
      ${attrs.disabled ? 'disabled' : ''}
      ${value === attrs.selected ? 'selected' : ''}
      onselectcard=${attrs.onselectcard(value)}>
    </card>
  `)

  return html`
    <div style=${wellStyle}>
      ${defaultCards}
    </div>
  `
}
