const Tram = require('tram-one')
const html = Tram.html()

const inputStyle = `
  font-size: 1em;
  padding: 0.25em;
  outline: 0;
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
