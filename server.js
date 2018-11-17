const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {

    if(request.url === '/'){        
        const html = fs.readFileSync('test.html','utf8')
        response.writeHead(200,{
            'Content-type':'text/html'
        })
        response.end(html)
    }


    if(request.url === '/script.js'){
        
        const etag = request.headers['if-none-match']
        if(etag === '777'){
            response.writeHead(304,{
                'Content-type':'text/javascript',
                'Cache-control':'max-age=2000000,no-cache',
                'Last-Modified':'123',
                'Etag':'777'
            })
            response.end('')
        }else{
            response.writeHead(200,{
                'Content-type':'text/javascript',
                'Cache-control':'max-age=2000000,no-cache',
                'Last-Modified':'123',
                'Etag':'777'
            })
            response.end('console.log("script loaded 11")')
        }
       
    }
    
}).listen(8888)

console.log('server listen 8888');
