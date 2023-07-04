import {expect, describe,test,jest} from '@jest/globals'
import PaymentSubject from '../src/subjects/paymentSubject.js'

describe('Test Suite for Observer Pattern', () => {
    test.todo('#Payment Subject notify observers', () => {
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

    test.todo('#Payment Subject should not notify unsubscribed observers', () => {
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

    test.todo('#Payment should notify subject after a credit card transaction')
    
    test.todo('#All should notify subscribers after a crdit card payment')
})
