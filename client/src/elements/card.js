const Tram = require('tram-one')
const html = Tram.html()

const containerStyle = `
  text-align: center;
  padding: 0.5em;
`

const userStyle = `
  color: white;
`

module.exports = (attrs, children) => {
  const cardStyle = `
    width: 3em;
    height: 4em;
    line-height: 4em;
    border-radius: 0.5em;
    border: 2px solid ${attrs.selected ? 'orange' : 'white'};
    background: #99ccff;
    flex: none;
    margin-bottom: 0.2em;
    cursor: ${attrs.disabled ? 'not-allowed' : 'pointer'};
    color: ${attrs.disabled ? '#81acd8' : 'black'};
    font-weight: bold;
    font-size: 1.25em;
  `

  return html`
    <div style=${containerStyle}>
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
