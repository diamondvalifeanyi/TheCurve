// callback function 
// import file system
// const fs = require("fs");

// //synchronous way of reading a file. utf8 is a standardfor text
// const myFile = fs.readFileSync("./me.txt", "utf8");
// console.log(myFile)


//asynchrounous way of reading a file
// const myFile = fs.readFile("./me.txt", "utf8", (error, data)=>{
//     if(error){
//         console.log
//     }



// });

// const { error } = require("console");



const fs = require("fs")
fs.readFile("./The Danger of a Single Story - Chimamanda Adichie Ngozi.pdf", (error, data)=>{
    if (error){
        console.log(error)
    
    }

    else {console.log(data.toString())};

});

// const fs = require("fs")
// const ourFile = fs.appendFile("./me.txt", "\n are they present", (error, data)=>{
//     if (error){
//         console.log("absent")
//     }else {console.log("yes they are")}
// });





