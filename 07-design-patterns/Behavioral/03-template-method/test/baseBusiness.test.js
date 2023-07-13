import {expect, describe, test, jest} from '@jest/globals'
import BaseBusiness from '../src/business/base/baseBusiness.js'
import { NotImplementedException } from '../src/util/exceptions.js'

describe('#BaseBusiness', () => {
    test('should throw an error when child class doenst implement _validadeRequiredFields function', () => {
        class ConcreteClass extends BaseBusiness{}
        const concreteClass = new ConcreteClass()
        const validationError = new NotImplementedException(
            concreteClass._validadeRequiredFields.name
        )

        expect(() => concreteClass.create({})).toThrow(validationError)

    })

    test ('should throw an error when  _validadeRequiredFields returns false',() => {
        const VALIDATION_DOESNT_SUCCEEDED = false

        class ConcreteClass extends BaseBusiness{
            _validadeRequiredFields = jest.fn().mockReturnValue(VALIDATION_DOESNT_SUCCEEDED)
        }

        const concreteClass = new ConcreteClass()

        const validationError = new Error(`invalid data!`)

        expect(() => concreteClass.create({})).toThrow(validationError)

    })

    test.todo('should throw an error when child class doenst implement _create function')
    test.todo('should call  _create and _validadeRequiredFields on create')
})
