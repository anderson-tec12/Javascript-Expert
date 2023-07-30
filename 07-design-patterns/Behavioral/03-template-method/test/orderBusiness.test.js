import {expect, describe, test, jest, beforeEach} from '@jest/globals'
import Order from '../src/entities/order.js'
import OrderBusiness from '../src/business/orderBusiness.js'

describe('Test suite for Template Method design pattern', () => {
    beforeEach(() => {
        jest.restoreAllMocks()
    })


    describe('#OrderBusiness', () => {
        test('Execution Order Business without template method', () => {
            const order = new Order({
                customerId:1,
                amount:100.000,
                products:[{
                    description: 'BMW'
                }]
            })

            const orderBusiness = new OrderBusiness()
            // Todos os devs devem obrigatoriamente lembra de seguir a risca esse fluxo de execussão
            // se alguem esquecer de chamar a função de validação, pode quebrar todo o sistema 

            const isValid = orderBusiness._validadeRequiredFields(order)

            expect(isValid).toBeTruthy()


            const result = orderBusiness._create(order)

            expect(result).toBeTruthy()
        })

        test('Execution Order Business with template method', () => {
            const order = new Order({
                customerId:1,
                amount:100.000,
                products:[{
                    description: 'BMW'
                }]
            })

            const orderBusiness = new OrderBusiness()
            const calledValidationFn = jest.spyOn(
                orderBusiness,
                orderBusiness._validadeRequiredFields.name
            )

            const calledCreateFn = jest.spyOn(
                orderBusiness,
                orderBusiness._create.name
            )

            // com template method, a sequencia de passos é sempre executada
            // evita a replicaçã ode codigo
            const result = orderBusiness.create()
            
            expect(result).toBeTruthy()
            expect(calledValidationFn).toHaveBeenCalled()
            expect(calledCreateFn).toHaveBeenCalled()
        })
    })

   
})
