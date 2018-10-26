module.exports = (name, action) => {
  switch (action.type) {
    case ('set_name'):
      localStorage.setItem('name', action.name)
      return action.name
    default:
      return name
  }
}
