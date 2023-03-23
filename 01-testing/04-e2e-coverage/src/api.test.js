const {describe, it, before, after} = require("mocha")
const supertest = require("supertest")

const assert = require('assert')

describe('API Suite test', () => {
  let app
  
  before((done) => {
    app = require('./api')
    app.once('listening', done)
  })

  after(done => app.close(done))

  describe("/contact:get", () => {
    it('should request the contact route and return HTTP Status 200', async () => {
      const response  = await supertest(app).get('/contact').expect(200)

      assert.strictEqual(response.text, 'Contact us page')
    })
  })

  describe("/hi:get - 404", () => {
    it('should request and existing route and return HTTP Status 404', async () => {
      const response  = await supertest(app).get('/hi').expect(404)

      assert.strictEqual(response.text, 'not found')
    })
  })

  describe("/login:post", () => {
    it('should request the contact page and return HTTP Status 200', async () => {
      const response  = await supertest(app)
        .post('/login')
        .send({
          username:"Anderson",
          password:"123"
        })
        .expect(200)

      assert.strictEqual(response.text, 'log in success')
    })

    it('should request the contact page and return HTTP Status 401', async () => {
      const response  = await supertest(app)
        .post('/login')
        .send({
          username:"john doe",
          password:"123"
        })
        .expect(401)

      assert.strictEqual(response.text, 'Log in failed')
    })
  })
})