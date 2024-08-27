import fs from 'fs'
//non-blocking code
// console.log("start")
// let file=fs.readFileSync("text.txt")
// console.log(file.toString())
// console.log("end")




console.log("start")
fs.readFile("text.txt","utf-8",(error,data)=>{
    error?console.log(error):console.log(data)
})
console.log(data)
console.log("end")
