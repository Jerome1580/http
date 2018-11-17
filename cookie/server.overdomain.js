const http = require('http')
const fs = require('fs')

http.createServer((request, response) => {
    // 设置域名的 cookie

    const host = request.headers.host

    if(request.url === '/'){        
        const html = fs.readFileSync('test.html','utf8')
        // 设置一级域名下的 cookie, 其二级域名下的都能访问
        // 如 a.test.com 和 b.test.com
        if(host === 'test.com'){
            response.writeHead(200,{
                'Content-type':'text/html',
                'Set-Cookie':['id=123;max-age=10','abc=456;HttpOnly','def=789;domain=test.com']
            })
        }
       
        response.end(html)
    }

    
}).listen(8888)

console.log('server listen 8888');
