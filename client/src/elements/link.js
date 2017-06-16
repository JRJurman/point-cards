const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  return html`
    <a href="${attrs.href}">${attrs.href}</a>
  `
}
