const fs= require("fs").promises;

fs.writeFile("./me.txt", "we are in backend class")
.then(()=>{
    console.log("data");
})
.catch((e)=>{
    console.log("not this");
});