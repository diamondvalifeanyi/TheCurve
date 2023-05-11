const fs = require("fs")
fs.readFile("./The Danger of a Single Story - Chimamanda Adichie Ngozi.pdf", (error, data)=>{
    if (error){
        console.log(error)
    
    }

    else {console.log(data.toString())};

});