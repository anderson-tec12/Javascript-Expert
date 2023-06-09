const { createSandbox} = require('sinon');
const  assert = require('assert');

const Fibonacci = require('./fibonacci');

const sinon = createSandbox()



 // Numero de sequencias: 3
    // [0] input = 5, current = 0, next = 1 = resultado 0
    // [1] input = 4, current = 1, next = 1 = resultado 1
    // [2] input = 3, current = 1, next = 2 = resultado 1
    // [3] input = 0, current = 2, next = 3 -> PARA


        // Numero de sequencias: 5
    // [0] input = 5, current = 0, next = 1 = resultado 0
    // [1] input = 4, current = 1, next = 1 = resultado 1
    // [2] input = 3, current = 1, next = 2 = resultado 1
    // [3] input = 2, current = 2, next = 3 = resultado 2
    // [4] input = 1, current = 3, next = 5 = resultado 3
    // [5] input = 0, current = 5, next = 8 -> PARA

;(async()=> {
  {
    const fibonacci = new Fibonacci()
    const spy = sinon.spy(fibonacci, fibonacci.execute.name)
    for(const sequenci of fibonacci.execute(5)){
      console.log({sequenci})
    }

    const expectedCallCount = 6
    assert.strictEqual(spy.callCount, expectedCallCount)

    const {args} = spy.getCall(2)
    const expectedParams = [3,1,2]

    assert.deepStrictEqual(args, expectedParams, "This is arrys is not equals")
  }

  {
    const fibonacci = new Fibonacci()
    const spy = sinon.spy(fibonacci, fibonacci.execute.name)
    const results = [...fibonacci.execute(5)]

    const expectedCallCount = 6
    assert.strictEqual(spy.callCount, expectedCallCount)

    const expectedResults = [0,1,1,2,3]
    assert.deepStrictEqual(results, expectedResults, "Arrays")
  }
})()