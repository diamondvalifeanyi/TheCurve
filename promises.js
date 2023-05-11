//promises

// const fs= require("fs").promises;

// fs.writeFile("./me.txt", "we are in backend class")
// .then(()=>{
//     console.log("data");
// })
// .catch((e)=>{
//     console.log("not this");
// });


// fs.appendFile("./me.txt", "\n mr ubani is our tutor")
// .then(()=>{
//     console.log("data");
// })
// .catch((e)=>{
//     console.log("this");
// });

const fs= require("fs").promises;

fs.unlink("./me.txt")
.then(()=>{
    console.log("data");
})
.catch((e)=>{
    console.log("not this");
});

