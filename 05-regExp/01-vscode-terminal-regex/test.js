const CPFS = `
  123.255.566.05
  123.255.566-05
  99999999999
  asd.def.ghi.xx
`
const result = CPFS.match(/\d{3}\.\d{3}\.\d{3}[\.|\-]\d{2}/g)
const result2 = CPFS.match(/\d{3}\.?\d{3}\.?\d{3}[\.|\-]?\d{2}/g)
console.log({result, result2})