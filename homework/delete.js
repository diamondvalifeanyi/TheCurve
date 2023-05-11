const fs = require("fs")
const myFile = fs.unlink("./me.txt", (error, data)=>{
    if (error){
        console.log("oops")
    }else {console.log("good")};

});
