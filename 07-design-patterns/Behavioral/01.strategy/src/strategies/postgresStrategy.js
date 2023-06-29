import Knex from 'knex'
 
export default class PostgresStrategy{
   #instance

  constructor(connectionString){
    this.connectionString = connectionString
    this.table = "warriors"
  }

  async connect(){
    this.#instance = Knex({
        client: 'pg',
        connection:this.connectionString
    })

    // knex não tem confirmaçã ode conexão com o banco então rodamos uma query para saber se deu certo
    return this.#instance.raw('select 1 + 1  as result')
  }

  async create(item){
    return this.#instance
        .insert(item)
        .into(this.table)
  }

  async read(item){
    return this.#instance
        .select()
        .from(this.table)
  }

}
