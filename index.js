const http = require('http');

const port = 9999;

http.createServer((req, resp) => {
    resp.writeHead(200, { "Content-Type": "text/html" })
    resp.write("Hello the server is started");
    console.log("server started at " + port)
    resp.end();
}).listen(9999);

