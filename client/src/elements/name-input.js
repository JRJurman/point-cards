const Tram = require('tram-one')
const html = Tram.html()

const inputStyle = `
  font-size: 1em;
`

module.exports = (attrs, children) => {
  return html`
    <div style=${attrs.style}>
      Name:
      <input
        value=${attrs.name}
        onchange=${attrs.onnameset}
        style=${inputStyle}
        type="text"
      />
    </div>
  `
}
