const Tram = require('tram-one')
const html = Tram.html()

const imgStyle = `
  width: 21px;
  margin-bottom: -2px;
`

module.exports = (attrs, children) => {
  return html`
    <footer style=${attrs.style}>
      Created by
      <a href="http://jrjurman.com/">Jesse Jurman</a>
      with
      <a href="http://tram-one.io/">
        <img style=${imgStyle} src="/tram-car.png" />
        Tram-One
      </a>
    </footer>
  `
}
