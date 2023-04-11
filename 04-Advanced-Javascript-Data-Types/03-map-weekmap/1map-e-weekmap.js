const assert = require('assert')

const myMap = new Map()

myMap
  .set(1, 'one')
  .set('anderson',  {text:"dev"})
  .set(true, () => 'hellow')


  // usando um contructor

  const myMapWithConstructor = new Map([
    ['1','str'],
    [1,'num'],
    [true,'boolean'],
    ['obj', {}],
  ])

  // console.log({myMap, myMapWithConstructor})

  assert.deepStrictEqual(myMap.get(1), 'one')
  assert.deepStrictEqual(myMap.get("anderson"), {text:"dev"})
  assert.deepStrictEqual(myMap.get(true)(), 'hellow')


  // EM OBJETOS A CHAVE SÓ PODE SER UMA STRING OU SYMBOL (NUMBER É COEGIDO PARA STRING)

  const onlyReferenceWorks = {id:1}
  myMap.set(onlyReferenceWorks, {name:"Anderson"})

  assert.deepStrictEqual(myMap.get({id:1, undefined}), undefined)
  assert.deepStrictEqual(myMap.get(onlyReferenceWorks),  {name:"Anderson"})