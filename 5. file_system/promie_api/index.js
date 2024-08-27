import * as fs from "fs/promises";

//creating directory /folder
// try {
//   await fs.mkdir("C:\\manjay") 
//   console.log("folder created") 
// } catch (error) {
//     console.log("error");
    
// }

// try {
//     await fs.mkdir("C:\\manjay\\curses\\index.js",{ recursive :true}) 
//     console.log("folder created") 
//   } catch (error) {
//       console.log("error");
      
//   }



//   try {
//      const file=await fs.readdir("C:\\manjay\\curses\\index.js")
//   for (const files of file) {
//     console.log(files);
    
//   }
//   } catch (error) {
//       console.log("error");
      
//   }




//   try {
//      await fs.rmdir("C:\\manjay\\curses")

//   } catch (error) {
//       console.log("error");
      
//   }



// create a file and write
//   try {
//      await fs.writeFile("README.md","hello i am from node.js")

//   } catch (error) {
//       console.log("error");
      
//   }




// read file
//   try {
//     const data=await fs.readFile("README.md","utf-8")
//     console.log(data);

//  } catch (error) {
//      console.log("error");
     
//  }




// append file data
// try {
//     await fs.appendFile("README.md","i am from also from react")
    

//  } catch (error) {
//      console.log("error");
     
//  }



// copy file content with diffenert 

// try {
//     await fs.copyFile("README.md","TEXT.txt")
    

//  } catch (error) {
//      console.log("error");
     
//  }





// give the boolean value depending upon file and directory and its present its give true and not present give false
// try {
//    const data =await fs.stat("TEXT.txt")
//    console.log(data.isDirectory())
//    console.log(data.isFile())
    

//  } catch (error) {
//      console.log("error");
     
//  }




