import OrderBusiness from './business/orderBusiness.js'
import Order from './entities/order.js'

const order = new Order({
    customerId:1,
    amount:90.000,
    products:[{description:'I30'}]
})

const orderBusiness = new OrderBusiness()
console.inf0('Created', orderBusiness.create(order))
