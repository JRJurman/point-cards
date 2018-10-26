const defaultName = typeof localStorage !== 'undefined' ? localStorage.getItem('name') : ''

module.exports = {
  init: () => defaultName,
  setName: (_, newName) => {
    localStorage.setItem('name', newName)
    return newName
  }
}
