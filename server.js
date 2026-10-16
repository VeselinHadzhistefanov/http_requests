import * as http from "node:http"
import * as fs from "node:fs"
import * as path from "node:path"

const PORT = 3000;

// To be used in file system handling
const MIME_TYPES = {
  default: "application/octet-stream",
  html: "text/html; charset=UTF-8",
  js: "text/javascript",
  css: "text/css",
  png: "image/png",
  jpg: "image/jpeg",
  gif: "image/gif",
  ico: "image/x-icon",
  svg: "image/svg+xml",
};

const URLS = {
  data: "/data"
}

const server = http.createServer()
server.on('request', async (req, res) => {
  const { headers, method, url } = req;
  console.log(headers)
  console.log(method)
  console.log(url)
  if (url == URLS.data) {
    console.log("Request made for data.")
    res.writeHead(200, {
      'Content-Type': 'application/json',
      'Access-Control-Allow-Origin': '*'
    })

    let body = []
    body.push("Response body: DATA")
    body.push("Another piece of information")
    body.push("1")
    body.push("2")
    body.push("3")

    const responseBody = { headers, method, url, body: body }
    res.write(JSON.stringify(responseBody))
    res.end()
  } else {
    console.log("Request made with invalid URL.")
  }
}).listen(PORT)

console.log(`Server created on port ${PORT}`)