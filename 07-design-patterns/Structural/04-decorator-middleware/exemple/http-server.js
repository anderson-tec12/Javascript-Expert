import http from 'http'
import {InjectHttpInterceptor} from './../index.js'


InjectHttpInterceptor()

function handleRequest(request, response){
    reponse.setHeader('X-Instrumented-By', 'AndersonBSilva')
    response.end('Hello world')
}

const server = http.createServer(handleRequest)
const port = 3000

server.listen(port, () => {
    console.log('server running at ',server.address().port )
})
