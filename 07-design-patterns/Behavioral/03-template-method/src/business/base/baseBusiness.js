/*
    Metodos que contem _ na frente devem ser implementado pelas classes filhas 
*/

import { NotImplementedException } from '../../util/exceptions.js';

export default class BaseBusiness {
    _validadeRequiredFields(data){
        throw new NotImplementedException(
            this._validadeRequiredFields.name
        )
    }

    _create(data){
        throw new NotImplementedException(
            this._create.name
        )
    }

    /*
        Padrão do Martin Fowler
        a proposta do padrão é garantir um fluxo de métodos, definindo uma sequencia a ser executada

        esse create é a implementação efetiva do Template Method
    */
    create(data){
        // validar campos
        // salvar no banco 

        const isValid = this._validadeRequiredFields(data)
        if(!isValid) throw new Error(`invalid data!`)

        return this._create(data)
    }
} 
