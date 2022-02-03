const http = require('http');
const hostname = '127.0.0.2';
const PORT = process.env.PORT || 3000;

const server = http.createServer((req, res) => {
    res.StatusCode = 200;
    res.setHeader('Content-Type', 'text/HTML; charset=utf-8');
    res.end("<strong>Loppu</strong>");
});

server.listen(PORT, hostname, () => {
    console.log('Server running');
});