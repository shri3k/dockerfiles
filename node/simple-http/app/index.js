const http = require('http');

const app = http.createServer((req, res) => {
  res.write('hello world');
  res.end();
});

app.listen(process.env.NODE_PORT || 3000, (...args) => {
  console.log('Listening...');
});
