const Tram = require('tram-one')
const header = require('./header')
const html = Tram.html({header})

module.exports = (attrs, children) => {
  return html`
    <div>
      <div class='vhs-top vhs-delay-1'>
        <header></header>
      </div>
      <div class='vhs-bottom vhs-delay-4'>
        ${children}
      </div>
    </div>
  `
}
