const Tram = require('tram-one')
const html = Tram.html()

module.exports = (attrs, children) => {
  const wellStyle = `
    background: #087f23;
    border-radius: 1rem;
    display: flex;
    flex-flow: wrap;
    padding: 1em;
    margin: 2rem;
    min-height: 9.5em;
    ${attrs.style}
  `

  return html`
    <div style=${wellStyle}>
      ${children}
    </div>
  `
}
