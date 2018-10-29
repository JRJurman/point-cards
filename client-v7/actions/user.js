// Emoji logic commented out until work is done to fix mobile
// const EmojiConverter = require('emoji-js')

// const converter = new EmojiConverter()

// const emojis = [':poop:', ':alien:', ':ghost:', ':tram:', ':floppy_disk:', ':tada:', ':confetti_ball:', ':coffee:', ':vhs:', ':tophat:', ':unicorn_face:', ':octopus:', ':popcorn:', ':100:', ':fax:', ':hourglass:']
// const emojiMap = emojis.map(string => converter.replace_colons(string)) // For testing purposes
// const emoji = converter.replace_colons(emojis[Math.floor(Math.random() * emojis.length)])
const defaultName = (typeof localStorage !== 'undefined') && (localStorage.getItem('name')) ? localStorage.getItem('name') : ''

module.exports = {
  init: () => defaultName,
  setName: (_, newName) => {
    localStorage.setItem('name', newName)
    return newName
  }
}
