import {expect, describe,test,jest, beforeAll} from '@jest/globals'
import PaymentSubject from '../src/subjects/paymentSubject.js'

describe('Test Suite for Observer Pattern', () => {
    beforeAll(() => {
        jest.spyOn(console, console.log.name).mockImplementation(() => {})
    })

    test('#Payment Subject notify observers', () => {
        const  subject = new PaymentSubject()
        const observer = {
            update: jest.fn()
        }

        const data = 'hello world'
        const expected = data

        subject.subscribe(observer)
        subject.notify(data)

        expect(observer.update).toBeCalledWith(expected)
    })

    test('#Payment Subject should not notify unsubscribed observers', () => {
        const  subject = new PaymentSubject()
        const observer = {
            update: jest.fn()
        }

        const data = 'hello world'

        subject.subscribe(observer)
        subject.unsubscribe(observer)
        subject.notify(data)

        expect(observer.update).not.toHaveBeenCalled()
    })

    test('#Payment should notify subject after a credit card transaction', () => {
        const subject = new PaymentSubject()
        const payment = new Payment(subject)

        const paymentSubjectNotifierSpy = jest.spyOn(
            payment.paymentSubject,
            payment.paymentSubject.notify.name
        )

        const data = {userName:'Anderson B. Silva', id: Date.now()}
        payment.creditCard(data)

        expect(paymentSubjectNotifierSpy).toBeCalledWith(data)

    })
    
    test.todo('#All should notify subscribers after a crdit card payment')
})
