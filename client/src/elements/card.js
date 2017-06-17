const Tram = require('tram-one')
const html = Tram.html()

const containerStyle = `
  text-align: center;
  padding: 0 1em 1em 0;
`

const userStyle = `
  color: white;
`

const cardColor1 = '#99ccff'
const cardColor2 = '#78bcff'

module.exports = (attrs, children) => {
  const cardTextColor = (() => {
    if (attrs.disabled) {
      return '#81acd8'
    } else if (attrs.hidden) {
      return 'rgba(0, 0, 0, 0)'
    }
    return 'black'
  })()
  const cardStyle = `
    width: 3em;
    line-height: 3.5em;
    border-radius: 0.5em;
    border: 4px solid ${attrs.selected ? 'orange' : 'white'};
    ${attrs.hidden ? `
      background: -webkit-repeating-linear-gradient(45deg, ${cardColor1}, ${cardColor1} 10px, ${cardColor2} 10px, ${cardColor2} 20px);
      background: repeating-linear-gradient(45deg, ${cardColor1}, ${cardColor1} 10px, ${cardColor2} 10px, ${cardColor2} 20px);
    ` : `background: ${cardColor1};`}
    flex: none;
    margin-bottom: 0.2em;
    cursor: ${attrs.disabled ? 'not-allowed' : 'pointer'};
    color: ${cardTextColor};
    font-weight: bold;
    font-size: 1.25em;
  `

  return html`
    <div class="vhs-pop" style=${containerStyle}>
      <div  style=${cardStyle}
            onclick=${attrs.onselectcard}>
        <div>${attrs.value}</div>
      </div>
      <div style=${userStyle}>
        ${attrs.user}
      </div>
    </div>
  `
}
