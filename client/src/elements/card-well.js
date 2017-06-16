const Tram = require('tram-one')
const html = Tram.html()

const wellStyle = `
  background: #005a0a;
  border-radius: 1em;
  display: flex;
  flex-flow: wrap;
  padding: 1em;
`

module.exports = (attrs, children) => {
  return html`
    <div style=${wellStyle}>
      ${children}
    </div>
  `
}
