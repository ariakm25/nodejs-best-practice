import * as dao from './user.dao.js'

export function index() {
  return dao.findUser()
}

export function read(id) {
  return dao.findUser(id)
}

export function create(username) {
  return dao.addUser(username)
}

export function update({ id, username }) {
  return dao.updateUser(id, username)
}

export function remove(id) {
  return dao.deleteUser(id)
}
