import http, { createServer } from 'http'
import fs from 'fs'

const server=http.createServer((req,res)=>{
    if(req.url==='/'){
     res.writeHead(200,"ok",{"Content-Type":"text/html"})
     fs.readFile("./public/about.html")
    }else if(req.url==='./public/about.html',(error,data)=>{
        if(error) throw error;
        res.end(data)
    }){

    }
})


server.listen(8000,()=>console.log("server up"))