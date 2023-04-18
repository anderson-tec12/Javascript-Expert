const {describe, it } = require('mocha')
const {expect} = require('chai')

const TextProcessorFluentAPI = require('../src/textProcessorFluentAPI.js')
const mock = require('./mocks/valid.js')


describe('textProcessorAPI', () => {
  it("#build", () => {
    const result = new TextProcessorFluentAPI(mock)
      .build()

    expect(result).to.be.deep.equal(mock)
  })
})