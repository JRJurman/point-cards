const Tram = require('tram-one')
const html = Tram.html()

const inputStyle = `
  color: white;
  border: none;
  border-bottom: solid 2px #087f23;
  outline: 0;
  background: none;
  font-size: 1em;
  padding: 0.25em;
  margin-left: 0.25em;
`

module.exports = (attrs, children) => {
  return html`
    <span style=${attrs.style}>
      <input
        size=10
        value=${attrs.name}
        onkeyup=${attrs.onnameset}
        style=${inputStyle}
        placeholder="User Name"
        type="text"
      />
    </span>
  `
}
