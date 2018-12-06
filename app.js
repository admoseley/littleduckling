const http = require('http');

const hostname = '127.0.0.1';
const port = 8000;
var dt = require('./date');

const server = http.createServer((req, res) => {
  res.statusCode = 200;
  res.setHeader('Content-Type', 'text/html');
  res.write("The date and time are currently: " + dt.myDateTime() + "<br />");
  res.end('\nHello World\n');
});

server.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
});