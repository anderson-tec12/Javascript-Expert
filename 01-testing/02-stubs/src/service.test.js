const assert = require('assert')
const Service = require('./service')
const {createSandbox} = require('sinon')
const sinon = createSandbox()

const mocks = {
  alderaan: require('../mocks/alderaan.json'),
  tatooine: require('../mocks/tatooine.json'),
}

const BASE_URL_1 = "https://swapi.dev/api/planets/1/"
const BASE_URL_2 = "https://swapi.dev/api/planets/2/"

;(async() => {
  {
    console.log({message:"Test using internet/API"})
    const serviceInternet = new Service()
    const data = await serviceInternet.makeRequest(BASE_URL_2)
    console.log({data})

    console.log({message:"--//--"})
  }

  const service = new Service()
  const stub = sinon.stub(
    service,
    service.makeRequest.name

  )

  stub.withArgs(BASE_URL_1).resolves(mocks.tatooine)
  stub.withArgs(BASE_URL_2).resolves(mocks.alderaan)

  {
    console.log({message:"Test no using internet/API"})
    const expected = {
      name:"Tatooine",
      surfaceWater:"1",
      appeardIn:5
    }

    const results = await service.getPlanets(BASE_URL_1)
    assert.deepStrictEqual(results, expected)

    console.log({message:"--//--"})
  }

  {
    console.log({message:"Test no using internet/API"})
    const expected = {
      name:"Alderaan",
      surfaceWater:"40",
      appeardIn:2
    }

    const results = await service.getPlanets(BASE_URL_2)
    assert.deepStrictEqual(results, expected)

    console.log({message:"--//--"})
  }
})()