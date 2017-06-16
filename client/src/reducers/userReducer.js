module.exports = (name, action) => {
  switch (action.type) {
    case ('set_name'):
      return action.name
    default:
      return name
  }
}
