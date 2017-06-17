const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  return html`
    <footer style=${attrs.style}>
      Created by
      <a href="http://jrjurman.com/">Jesse Jurman</a>
      with
      <a href="http://tram-one.io/">🚋 Tram-One</a>
    </footer>
  `
}
