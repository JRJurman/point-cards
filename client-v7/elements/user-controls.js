const Tram = require('tram-one')
const html = Tram.html()

const buttonStyle = `
  border: 2px solid white;
  border-radius: 1rem;
  font-size: 1em;
  padding: 0.25em 0.75em;
  margin-left: 1em;
  cursor: pointer;
  outline: 0;
`

const buttonStyleTag = html`
  <style>
    .control-button {
      background: #99ccfe;
    }
    .control-button:hover {
      background: #b7d9fb
    }
    .control-button:active {
      background: #7eaad4
    }
  </style>
`

module.exports = (attrs, children) => {
  return html`
    <span style=${attrs.style}>
      ${buttonStyleTag}
      <button onclick=${attrs.onaction}
              class='control-button'
              style=${buttonStyle}>
        ${attrs.action}
      </button>
      <button onclick=${attrs.onclear}
              class='control-button'
              style=${buttonStyle}>
        Clear
      </button>
    </span>
  `
}
