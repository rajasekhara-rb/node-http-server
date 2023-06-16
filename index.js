// imprting the http 
const http = require('http');

// define port 
const port = 9999;

// create server 
const server = http.createServer((req, resp) => {
    // resp.statusCode=200;
    // resp.setHeader("Content-Type", "text/html" )
    resp.writeHead(200, { "Content-Type": "text/html" })
    resp.write("Hello the server is started");
    resp.end();
})

server.listen(port, () => {
    console.log("server started at " + port)
});

