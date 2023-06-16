const Database = require('../util/database')

class UserFactory{
  static  async createInstance(){
    const db = new Database({connectionString:"mongodb://localhost"})
    const dbConnection = await db.connect()
  }

}

module.exports = UserFactory