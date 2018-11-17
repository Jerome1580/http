const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    // 基础设置 cookie
    if(request.url === '/'){        
        const html = fs.readFileSync('test.html','utf8')
        response.writeHead(200,{
            'Content-type':'text/html',
            'Set-Cookie':['id=123;max-age=10','abc=456;HttpOnly']
        })
        response.end(html)
    }

    
}).listen(8888)

console.log('server listen 8888');
