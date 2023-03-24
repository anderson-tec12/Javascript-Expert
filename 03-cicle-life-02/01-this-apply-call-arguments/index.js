'use strict'

const {watch, promises: {readFile}} = require('fs')


class File{
  watch(event, filename){
    console.log({th:this})
    console.log('è uma ma pratica usar, mas o arguments listas todos os parametros passados para o metodo', arguments)
    console.log('Trasnformando em array', Array.prototype.slice.call(arguments))
    this.showContent(filename)
  }


  async showContent(filename){
    console.log( (await readFile(filename)).toString())
  }
}

const file = new File()

{
  /*
  // CONVENCIONAL FUNGINDO DO PADRÂO DE CLASS

    watch(__filename, async (event, filename) => {
      console.log( (await readFile(filename)).toString())
    })
  
  */
}

{
  // Dessa forma, o this da class file vai ser ignorado e vai dar erro
  //herda o this do watch
  //watch(__filename, file.watch)
}

{
  // maneira feia 
  //usando uma arrow function para evitar que a class file herde o this da watch
  //watch(__filename, (event,filename) => file.watch(event,filename))
}

{
  //Deixando explicito qual contexto a função deve seguir
  //watch(__filename,  file.watch.bind(file))
}

{
  //altera o comportamento de uma função da instancia 
  // apos passar a nova função, se a função original receber 3 parametros devemos passar logo apos a função
  //nesse caso são 2 parametros 
  // null = event
  // filename = __filename
  file.watch.call({showContent: () => console.log('call: hey sinon')}, null, __filename)
  file.watch.apply({showContent: () => console.log('call: hey sinon, porem os parametros são passados como array')}, [null, __filename])
}
