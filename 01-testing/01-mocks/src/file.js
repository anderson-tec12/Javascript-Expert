const {readFile} = require("fs/promises")
const {join} = require("path")
const { error } = require("./constants")

const DEFAULT_OPTION = {
  maxLines: 3,
  fields:["id","name","profession","age"]
}

class File{
  static async csvToJSON(filePath){
    // this is function to return string
    const content = await readFile(filePath, "utf8")
    console.log({'file': content})

    const validation = this.isValid(content)
  
    if(!validation.valid) throw new Error(validation.error)
    const result = this.paserCSVToJSON(content)
    return result
  }

  static isValid(csvString, options = DEFAULT_OPTION){
    const result = csvString.split(/\r?\n/)
    console.log({result})

    const [header, ...fileWithoutHeader] = result
    console.log({
      header:header,
      lines:fileWithoutHeader
    })

    const isHeaderValid = header === options.fields.join(',')

    if(!isHeaderValid){
      return {
        error:error.FILE_FIELDS_ERROR_MESSAGE,
        valid:false
      }
    }

    if(!fileWithoutHeader.length || fileWithoutHeader.length > options.maxLines){
      return {
        error: error.FILE_LENGTH_ERROR_MESSAGE,
        valid:false
      }
    }


    return {
      valid:true
    }
  }

  static paserCSVToJSON(CSVString){
    const lines =   CSVString.split(/\r?\n/)
    const firstLine = lines.shift()
    const header = firstLine.split(',')

    console.log({header})

    const users = lines.map(line => {
      const columns = line.split(',')
      const user = {}

      for(const index in columns){
        user[header[index]] = columns[index].trim()
      }

      return user
    })

    console.log({users})
    return users
  }

}


// (async () => {
//   const result = await File.csvToJSON("./../mocks/threeItems-valid.csv")
//   console.log("result", result)
// })()


module.exports = File