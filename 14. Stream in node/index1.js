import {createReadStream} from "fs";

const stream=createReadStream("./test.txt",{encoding:"utf8"});
stream.once("data",(data)=>{
    console.log(data)
})