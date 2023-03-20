const { describe, it, before, beforeEach, afterEach} = require("mocha");
const {join} = require('path')
const assert = require('assert')
const sinon = require('sinon')
const {expect} = require('chai')

const Transaction = require('./../../src/entities/transaction')
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

  it('Given a carCategory, customer and numberOfDays it should calculate final amount in real', async () => {
    const customer = Object.create(mocks.validCustomer)
    customer.age = 50;

    const carCategory = Object.create(mocks.validCarCategory)
    carCategory.price = 37.6


    const numberOfdays = 5

    sandbox.stub(carService,
      "taxesBasedOnAge").get(() => [{from :40,to: 50, then:1.3}])

    const result = carService.calculateFinalPrice(customer, carCategory, numberOfdays)
    const expected  = carService.currencyFormat.format(244.40)

    console.log({expected, result})
    expect(result).to.be.deep.equal(expected) 
  })

  it('given a customer and a car category it should return a transaction receipt', async () => {
    const car = mocks.validCar
    const carCategory = {
        ...mocks.validCarCategory,
        price: 37.6,
        carIds: [car.id]
    }
    
    const customer = Object.create(mocks.validCustomer)
    customer.age = 20

    const numberOfDays = 5
    const dueDate = "10 de novembro de 2020"
    
    const now = new Date(2020, 10, 5)
    sandbox.useFakeTimers(now.getTime())
    // age: 20, tax: 1.1, categoryPrice: 37.6
    // 37.6 * 1.1 = 41.36 * 5 days = 206.8
    sandbox.stub(
        carService.carRepository,
        carService.carRepository.find.name,
    ).resolves(car)
    
    const expectedAmount = carService.currencyFormat.format(206.80)
    const result = await carService.rent(
        customer, carCategory, numberOfDays
    )
    const expected = new Transaction({
        customer,
        car,
        dueDate,
        amount: expectedAmount,
    })

    expect(result).to.be.deep.equal(expected)
    
})
})