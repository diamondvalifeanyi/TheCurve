const fs = require("fs")
const ourFile = fs.appendFile("./me.txt", "\n are they present", (error, data)=>{
    if (error){
        console.log("absent")
    }else {console.log("yes they are")}
});
