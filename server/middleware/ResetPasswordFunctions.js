const users = []
const requests = []

function createUser(user) {
  users.push(user)
}

function getUser(email) {
  const thisUser = users.find(user => user.email === email)
  return thisUser
}

function updateUser(user) {
  const thisUserIndex = users.findIndex(local => local.email === user.email)
  users[thisUserIndex] = user
}

function createResetRequest(resetRequest) {
  requests.push(resetRequest)
}

function getResetRequest(id) {
  const thisRequest = requests.find(req => req.id === id)
  return thisRequest
}

module.exports = {
  createUser,
  getUser,
  updateUser,
  createResetRequest,
  getResetRequest
}
