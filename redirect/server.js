const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {

    // 重定向
    if(request.url === '/'){        
        response.writeHead(302,{
            'Location':'/new'
        })
        response.end()
    }
    if(request.url === '/new'){        
        response.writeHead(200,{
            'Content-type':'text/html',
        })
        response.end(html)
    }

    
}).listen(8888)

console.log('server listen 8888');
