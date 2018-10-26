const Tram = require('tram-one')

const roomInput = require('./room-input')

const html = Tram.html({
  'room-input': roomInput
})

const homeStyle = `
  text-align: center;
  font-size: 1.5em;
`

const headerStyle = `
  margin: 0.75rem;
`

const buttonStyle = `
  border: 2px solid white;
  border-radius: 1rem;
  font-size: 1em;
  padding: 0.25em 0.75em;
  cursor: pointer;
  outline: 0;
  margin: 0.75rem;
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
    <div class="foo">
      <div style=${homeStyle}>
        <div style=${headerStyle}> Create / Join Room </div>
        <room-input
          onjoinroom=${attrs.onjoinroom}
          onroomset=${attrs.onroomset}
          room=${attrs.room}>
        </room-input>
        <div>
          ${buttonStyleTag}
          <button class="control-button"
                  style=${buttonStyle}
                  onclick=${attrs.onjoinroom}>
            Join Room ${attrs.room}
          </button>
        </div>
      </div>
    </div>
  `
}
