const http = require('http')

http.createServer((request, response) => {

    response.writeHead(200,{
        'Access-Control-Allow-Origin':'*'
    })
    response.end('2222222')
    
}).listen(8887)

console.log('server listen 8887');
