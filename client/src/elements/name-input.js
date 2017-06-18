const Tram = require('tram-one')
const html = Tram.html()

const inputStyle = `
  font-size: 1em;
  padding: 0.25em;
  margin-left: 0.25em;
`

module.exports = (attrs, children) => {
  return html`
    <span style=${attrs.style}>
      Name:
      <input
        value=${attrs.name}
        onkeyup=${attrs.onnameset}
        style=${inputStyle}
        type="text"
      />
    </span>
  `
}
