const http = require("http");
const {once} = require('events')

const DEFAULT_USER = {
  username:"Anderson",
  password:"123"
}

const routes = {
  "/contact:get": (request, response) => {
    response.write("Contact us page");
    return response.end();
  },
  "/login:post":async (request, response) => {
    const user = JSON.parse(await once(request,"data"))
    const toLower = (text)=> text.toLowerCase()
    console.log({data:user.toString()})

    if(
      toLower(user.username) !== toLower(DEFAULT_USER.username) ||
        user.password !== DEFAULT_USER.password
      ) {
        response.writeHead(401)
        response.end('Log in failed')
        return
      }

    return response.end('log in success')
  },
  default:(request, response) => {
    response.writeHead(404)
    return response.end('not found')
  }
};

function handler(request, response) {
  const { url, method } = request;
  const routeKey = `${url.toLowerCase()}:${method.toLowerCase()}`;

  console.log({ url, method });
  console.log({ routeKey });

  const chosen = routes[routeKey] || routes.default
  return chosen(request, response);
}

const app = http.createServer(handler).listen(3000, () => {
  console.log({ message: "running at 3000" });
});


module.exports = app