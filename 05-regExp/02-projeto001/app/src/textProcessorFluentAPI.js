// O objetivo do Fluent API é executar tarefas 
// como um pipeline, step by step

class TextProcessorFluentAPI{
  // Prop Private
  #content 
  constructor(content){
    this.#content = content
  }


  extractPeopleData(){
    return this
  }


  build(){
    return this.#content
  }
}



module.exports = TextProcessorFluentAPI