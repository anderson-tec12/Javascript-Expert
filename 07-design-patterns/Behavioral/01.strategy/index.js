import ContextStrategy from './src/base/contextStrategy.js'
import MongoDBStrategy from './src/strategies/mongoDBStrategy.js'
import PostgresStrategy from './src/strategies/postgresStrategy.js'


const postgreStrategy = new ContextStrategy(new PostgresStrategy())
const mongoDBStrategy = new ContextStrategy(new MongoDBStrategy())


postgreStrategy.connect()

const data = [
  {
    name:"anderson",
    type:'transaction'
  },
  {
    name:"maria",
    type:'activityLog'
  }
]