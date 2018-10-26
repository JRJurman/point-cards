const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  return html`
    <h1 style=${attrs.style}>
      Point Cards
    </h1>
  `
}
