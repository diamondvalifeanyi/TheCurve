const fs= require("fs").promises;

fs.appendFile("./me.txt", "\n mr ubani is our tutor")
.then(()=>{
    console.log("data");
})
.catch((e)=>{
    console.log("this");
});