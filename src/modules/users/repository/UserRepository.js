
const getUser = (users, name) => {
  const userFind = users.find(user => user.name === name)
  return userFind
}

export { getUser }