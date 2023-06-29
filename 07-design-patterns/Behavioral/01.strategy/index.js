import ContextStrategy from './src/base/contextStrategy.js'
import MongoDBStrategy from './src/strategies/mongoDBStrategy.js'
import PostgresStrategy from './src/strategies/postgresStrategy.js'


const postgresConnectionString = "postgres://abs:senha001@localhost:5432/heroes"

const postgreContext = new ContextStrategy(new PostgresStrategy(postgresConnectionString))

const mongoDBStrategy = new ContextStrategy(new MongoDBStrategy())


const result = await postgreContext.connect()
console.log({result})

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


await postgreContext.create({name:data[0].name})
console.log(await postgreContext.read())
