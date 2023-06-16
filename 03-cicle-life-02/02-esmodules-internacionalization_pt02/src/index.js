import database from '../database.json'
import TerminalController from './terminalController.js'
import Person from './person.js'

// 1 C3,CORSA 10000 2023-03-01 2023-03-15

const DEFAULT_LANG = "pt-BR"
const STOP_TERM = ":q"

const terminalController = new TerminalController()
terminalController.initializeTerminal(database, DEFAULT_LANG)


async function mainLoop(){
  try{
    const answer = await terminalController.question(' ')
    
    if(answer === STOP_TERM) {
      terminalController.closeTerminal()
      console.log('Proccess finished!')
      return
    }
    const person = Person.generateInstanceFromString(answer)
    console.log(person.formatted(DEFAULT_LANG))

    return mainLoop()
  }catch(error){
    console.error('Deu Ruim', error)
    return mainLoop()
  }
}


await mainLoop()


