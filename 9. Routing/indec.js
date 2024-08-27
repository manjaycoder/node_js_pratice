import http from 'http'

const server =http.createServer((req,res)=>{
    if(req.url === '/'){
        res.writeHead(200,"OK ",{"Content-Type":"text/html"})
        res.end("<h1>manjay👦</h1>")
         res.end("<a href='/about'>About</a>")
    }else if (req.url === '/home'){
        res.end("<h1>ajay wev dev</h1>")
    }else if(req.url ==='/about'){
        res.end("<h3>manjay fulll stack</h3>")
    }else if(req.url==='/manjay'){
        res.end("<h1>error 404</h1>")
    }
});

//homepage
//about
//contact:id

server.listen(8000,()=>console.log("server up !"))