//path module
import path from 'path';
// path module give the path of the file
// console.log(path.basename("c:\\Desktop\\node js\\index.js",'.js'));

// dirname module give the directary name
// console.log(path.dirname("c:\\node js\\index.js"));


// extname module give the extension name
// console.log(path.extname("c:\\node js\\index.js"));


// join module is the way to convert , into / 
// console.log(path.join('c:','huxn-wedev','course'));



//to go upp a level 
// console.log(path.join('c:','huxn-wedev','course','..'));


// normalize is the method to remove // into / and convert into normal path
// console.log(path.normalize("c:\\courses\\redux\\store"));


// console.log(path.parse("c:\\couses\\manjay"));



// it give the base name
// console.log(path.parse("c:\\couses\\manjay\\java\\index.js").base);


// it is give the name of the file and not showing extension
// console.log(path.parse("c:\\couses\\manjay\\java\\index.js").name);


// it show only file extension
// console.log(path.parse("c:\\couses\\manjay\\index.js").ext);