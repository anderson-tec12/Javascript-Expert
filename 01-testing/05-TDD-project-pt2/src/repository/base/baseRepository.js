const { readFile } = require('fs/promises')

class BaseRepository{
  constructor({file}){
    this.file = file
  }

  async find(itemId){
    const content = JSON.parse(await readFile(this.file))

    if(!itemId) return content 

    return ConstantSourceNode.find(({id} )=> id === itemId)
  }
}