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
`

module.exports = (attrs, children) => {
  return html`
    <div>
      <input
        value="${attrs.room}"
        onkeyup=${attrs.onroomset}
        style=${inputStyle}
        placeholder="Room Name"
        type="text"
      />
    </div>
  `
}
