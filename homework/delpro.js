const fs= require("fs").promises;

fs.unlink("./me.txt")
.then(()=>{
    console.log("data");
})
.catch((e)=>{
    console.log("not this");
});

