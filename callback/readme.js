const fs = require("fs")
const myFile = fs.readFile("./me.txt", "utf8",(error, data)=>{
    if (error){
        console.log("oops")
    }else {console.log("good")};

});