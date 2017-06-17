const Tram = require('tram-one')
const html = Tram.html()

const inputStyle = `
  font-size: 1em;
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
