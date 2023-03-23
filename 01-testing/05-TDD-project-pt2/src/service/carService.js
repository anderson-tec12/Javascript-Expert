const BaseRepository = require('../repository/base/baseRepository')


class CarService {
  constructor({cars}){
    this.carRepository = new BaseRepository({file:cars})
  }


  async getAvailableCar(carCategory){
    const cardId = this.chooseRandomCar(carCategory)
    const car = await this.carRepository.find(cardId)
    return car
  }

  getRandomPositionFromArray(list){
    const listLength = list.length

    return Math.floor(
      Math.random() * (listLength)
    )
  }

  chooseRandomCar(carCategory){
    const randomCarIndex = this.getRandomPositionFromArray(carCategory.cardIds)
    const cardIds = carCategory.cardIds[randomCarIndex]
    console.log({cardIds})
    return cardIds
  }


}

module.exports = CarService