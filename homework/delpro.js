const fs= require("fs").promises;

fs.unlink("./me.txt")
.then(()=>{
    console.log("deleted successfully")
})
.catch((e)=>{
    console.log("not this");
});

