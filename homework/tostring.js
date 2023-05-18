const fs = require("fs")
fs.readFile("./classfile.pdf", (error, data)=>{
    if (error){
        console.log(error)
    
    }

    else {console.log(data.toString())};

});

// const fs = require('fs')
// const pdf12 = require('pdf-parse')

// let abc = fs.readFileSync('./classfile.pdf')
// pdf12(abc).then(function(data){
//     console.log(data.text)
// })