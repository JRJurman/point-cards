const Tram = require('tram-one')

const pageWrapper = require('../elements/page-wrapper')

const html = Tram.html({
  'page-wrapper': pageWrapper
})

module.exports = (state) => {
  return html`
    <page-wrapper>
      Join a Room
    </page-wrapper>
  `
}
