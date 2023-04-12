const dev = {
  name:"Anderson",
  age:30,
  propToRemove:""
}

//Removendo propriedade de forma performatica 
Reflect.deleteProperty(dev , "propToRemove")
console.log("Removendo a prop propToRemove", {dev})

//Verificado se exite  propriedade 
const isPropValid = Reflect.has(dev, 'name')
console.log('Verificando se existe a propriedade no objeto', {isPropValid})

//Acessando propriedade 
const PropValueName = Reflect.get(dev, 'name')
console.log('Acessando propriedade ', {PropValueName})

//Pegando todas as keys
const keys = Reflect.ownKeys(dev)
console.log("Pegandos as chaves",{keys})

Reflect.set(dev, "job", "Front End Senior")
console.log({dev})