let users = []

let id = 0
const nextId = () => ++id

export function findUser(id) {
  return id ? users.find(user => user.id === id) : users
}

export function addUser(username) {
  users.push({ id: nextId(), username })
}

export function updateUser(id, username) {
  users = users.map(user => {
    return user.id === id ? { id: user.id, username } : user
  })
}

export function deleteUser(uid) {
  users = users.filter(({ id }) =>  id !== uid)
}