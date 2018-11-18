const http = require('http')
const fs = require('fs')

const wait = seconds => {
    return new Promise((reslove, reject)=>{
        setTimeout(()=>{
            reslove()
        },seconds * 1000)
    })
}

http.createServer((request, response) => {
    console.log('request come');
    console.log(request.headers.host);
    
    
    if(request.url === '/'){        
        const html = fs.readFileSync('test.html','utf-8')
        response.writeHead(200,{
            'Content-type':'text/html',
            'Cache-control':'max-age=20'
        })
        
        response.end(html)
    }

    if(request.url === '/data'){

        response.writeHead(200,{
            'Cache-control':'max-age=2;s-maxage=20;privite',// 浏览器缓存2秒,代理服务器缓存20秒;只允许浏览器缓存
            'Vary':'X-Test' // 代理服务器验证,头信息一样,才使用缓存
        })
        wait(2).then(() => response.end('success'))
        
    }

    
}).listen(8888)

console.log('server listen 8888');
