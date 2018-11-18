const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    console.log('request come');
    console.log(request.headers.host);
    
    
    if(request.url === '/'){        
        const html = fs.readFileSync('test.html','utf-8')
        response.writeHead(200,{
            'Content-type':'text/html',
            'Cache-control':'max-age=20',
            'Link':'</test.jpg>;as=image;rel=preload'  // http2 主动推送
        })
        
        response.end(html)
    }


    
}).listen(8888)

console.log('server listen 8888');
