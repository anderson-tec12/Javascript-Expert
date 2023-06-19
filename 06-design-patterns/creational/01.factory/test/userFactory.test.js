const rewiremock = require('rewiremock/node')
const {deepStrictEqual} = require('assert')




// Poderia estar em outro arquivo
const dbData = [
  {
    name:"Mariazinha"
  },
  {
    name:"Joãozinho"
  }
]

// mesmas funções do util/database
class MockdataBase {
  connect = () => this
  find = async (query) => dbData
}
//


rewiremock(() => require('./../src/util/database')).with(MockdataBase)

;(async () => {
  {
    const expected = [
      {
        name:"MARIAZINHA"
      },
      {
        name:"JOÃOZINHO"
      }
    ]

    rewiremock.enable()
     const UserFactory = require('../src/factory/userFactory')
     const userFactory = await UserFactory.createInstance()
     const result = await userFactory.find()

     deepStrictEqual(result, expected)
    rewiremock.disable()
  }

  {
    const expected = [
      {
        name:"ANDERSON"
      },
      
    ]

   
     const UserFactory = require('../src/factory/userFactory')
     const userFactory = await UserFactory.createInstance()
     const result = await userFactory.find()

     deepStrictEqual(result, expected)
   
  }
})()