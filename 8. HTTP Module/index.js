import http from 'http'

//create our server
const server=http.createServer((req,res)=>{
    // res.write("<h1>manjay verma</h1>");
    // res.end("<h1>mankau</h1>")
    // console.log("Content-Type","text/html")
    // res.statusCode=404
    // res.statusMessage="BAD"
    // res.writeHead(202,"Good",{"Content-type":"text/html"})
    // res.write("<h1>hello from node.js</h1>")
})
server.listen(8000,()=>console.log("server"));




