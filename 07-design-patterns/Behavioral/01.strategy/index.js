import ContextStrategy from './src/base/contextStrategy.js'
import MongoDBStrategy from './src/strategies/mongoDBStrategy.js'
import PostgresStrategy from './src/strategies/postgresStrategy.js'


const postgresConnectionString = "postgres://abs:senha001@localhost:5432/heroes"
const mongodbConnectionString = "mongodb://abs:senha001@localhost:27017/heroes"

const postgreContext = new ContextStrategy(new PostgresStrategy(postgresConnectionString))

const mongoDBContext = new ContextStrategy(new MongoDBStrategy(mongodbConnectionString))


const result = await postgreContext.connect()
console.log({result})

const mongoResult = await mongoDBContext.connect()
console.log({mongoResult})

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

const contextTypes = {
    transaction: postgreContext,
    activityLog: mongoDBContext
}


for(let {type, name} of data){
    const context = contextTypes[type]
    await context.create({name: `${name} - ${Date.now()}`})

    console.log(type)

    console.log(await context.read())
}


// await postgreContext.create({name:data[0].name})
// console.log(await postgreContext.read())


// await mongoDBContext.create({name:data[1].name})
// console.log(await mongoDBContext.read())
