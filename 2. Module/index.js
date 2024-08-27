//this will us to use that function from that (index.js) file and we can use it right here.
const greets=require('./greets')
const people=require('./people')
console.log(people[1],people[2]);
greets("manjay")