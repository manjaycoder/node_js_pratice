import EventEmitter from 'events';


// Create an instance of EventEmitter

const customEmitter = new EventEmitter();

//1. on :listen/register for an event
//2. once :listen/register from an event
//3. emit:emit/call an event

// customEmitter.on("res",(name,id)=>{
//     console.log(`user: ${name} id: ${id}`)
// })
// customEmitter.emit("res","manjay",56)
// customEmitter.emit("res","ajay",96)


//run only one time

// customEmitter.once("res",(name,id)=>{
//     console.log(`user: ${name} id: ${id}`)
// })
// customEmitter.emit("res",("huxn",67))