export default class NotImplementedExepted extends Error {
  constructor(message){
    super(`the "${message}" function was not implemented`)

    this.name = "NotImplementedExepted"
  }
}