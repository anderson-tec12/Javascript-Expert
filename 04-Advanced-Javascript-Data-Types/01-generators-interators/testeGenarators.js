function API(resolve, number, data){
  return setTimeout(()=> {
    // console.log('RODOU')
    resolve(data)
  },number)
}

async function myPromise(number, data){
  const result = await new Promise((resolve) => {
    return API(resolve, number, data)
  })

  console.log(result)
}

function teste(){
  console.log('RODANDO')
}

function* myGenerator(){

  yield myPromise(3000, {age:30})
  yield myPromise(1000, {name:"Anderson"})


  yield myPromise(2000, {work:"DEV"})

  // console.log(result1)
  // console.log(result2)
  // console.log(result3)
}


;(async () => {
  Array.from(myGenerator())
  const exec = [...myGenerator()]
})()