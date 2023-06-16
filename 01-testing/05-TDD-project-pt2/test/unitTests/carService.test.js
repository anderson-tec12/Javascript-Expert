const { describe, it, before, beforeEach, afterEach} = require("mocha");
const {join} = require('path')
const assert = require('assert')
const sinon = require('sinon')
const {expect} = require('chai')

const CarService = require('./../../src/service/carService')

const carsDatabase = join(__dirname,'./../../database', "cars.json")

const ID_CAR = '094dcdf6-f02c-4979-9cce-1ae9f27b4029'

const mocks = {
  validCarCategory: require('../mocks/valid-carCategory.json'),
  validCar: require('../mocks/valid-car.json'),
  validCustomer: require('../mocks/valid-customer.json'),
}

describe('CarService Suite Tests', () => {
  let carService = {}
  let sandbox = {}

  before(() => {
    carService = new CarService({cars:carsDatabase})
  })

  beforeEach(() => {
    sandbox = sinon.createSandbox()
  })

  afterEach(() => {
    sandbox.restore()
  })

  it("should retrieve random position from an array", () =>{
    const data = [ 0,1,2,3,4]
    const result = carService.getRandomPositionFromArray(data)

    expect(result).to.be.lte(data.length).to.be.gte(0)
  })

  it('should choose the first id from carIds in carCategory', () => {

    const carCategory = mocks.validCarCategory
    const caridIndex = 0

    sandbox.stub(carService, carService.getRandomPositionFromArray.name).returns(caridIndex)

    const result = carService.chooseRandomCar(carCategory)
    const expected = carCategory.cardIds[caridIndex]

    expect(carService.getRandomPositionFromArray.calledOnce).to.be.ok
    expect(result).to.be.equal(expected)
  })

  it('Given a carCategory it should return an available car', async () => {
    const car = mocks.validCar
    const carCategory = Object.create(mocks.validCarCategory)
    carCategory.cardIds = [car.id]

    sandbox.stub(
      carService.carRepository,
      carService.carRepository.find.name
      ).resolves(car)

      sandbox.spy(
        carService,
        carService.chooseRandomCar.name
        )

    const result = await carService.getAvailableCar(carCategory)
    const expected = car

    console.log({result})

    // assert.deepStrictEqual(result, expected)

    expect(carService.chooseRandomCar.calledOnce).to.be.ok
    expect(result).to.be.deep.equal(expected)
  })
})