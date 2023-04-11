const uniqueKey = Symbol("userName")
const user = {}

user["userName"] = 'anderson'
user[uniqueKey] = 'Anderson'


console.log({
  a: user.userName,
  b: user[Symbol("userName")] = 'Outher reference memory',
  c:user[uniqueKey],
  key:uniqueKey
})