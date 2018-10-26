const Tram = require('tram-one')

const card = require('./card')
const html = Tram.html({card})

module.exports = (attrs, children) => {
  const select = (() => {
    if (attrs.disabled) {
      return () => {}
    }
    return attrs.onselectcard
  })()
  const defaultCards = [
    '0', '0.5', '1', '2', '3', '5',
    '8', '13', '20', '40', '100', '?'
  ].map(value => html`
    <card
      value=${value}
      ${attrs.disabled ? 'disabled' : ''}
      ${value === attrs.selected ? 'selected' : ''}
      onselectcard=${select(value)}>
    </card>
  `)

  const wellStyle = `
    display: flex;
    flex-flow: wrap;
    margin: 2rem;
    margin-right: 0;
    font-size: 0.75em;
    ${attrs.style}
  `

  return html`
    <div style=${wellStyle}>
      ${defaultCards}
    </div>
  `
}
