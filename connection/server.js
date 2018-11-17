const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {

    const img = fs.readFileSync('test.jpg')

    if(request.url === '/'){        
        const html = fs.readFileSync('test.html','utf8')
        response.writeHead(200,{
            'Content-type':'text/html',
            'Connection':'close'  // 关闭长连接 keep-alive
        })
        response.end(html)
    }else{
        response.writeHead(200,{
            'Content-type':'image/jpg',
            'Connection':'close'    // 关闭长连接 keep-alive
        })
        response.end(img)
    }

    
}).listen(8888)

console.log('server listen 8888');
