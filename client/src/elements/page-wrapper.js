const Tram = require('tram-one')
const header = require('./header')
const footer = require('./footer')
const html = Tram.html({header, footer})

const headerStyle = `
  background: #087f23;
  color: white;
  margin: 0;
  padding: 0.5rem 2rem 0.5rem 2rem;
`

const footerStyle = `
  text-align: center;
  width: 100%;
  padding-left: 2rem;
  background: #087f23;
  color: #eee;
  position: absolute;
  bottom: 0px;
`

const footerSpacing = `
  padding-bottom: 1em;
`

module.exports = (attrs, children) => {
  return html`
    <div class='page-wrapper' style=${footerSpacing}>
      <a href="/"><header style=${headerStyle}></header></a>
      ${children}
      <footer style=${footerStyle}></footer>
    </div>
  `
}
