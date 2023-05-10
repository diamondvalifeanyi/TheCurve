const fs = require("fs")
const myFile = fs.writeFile("./me.txt", "names of some backend students",(error, data)=>{
    if (error){
        console.log("oops")
    }else {console.log("good")};

});
