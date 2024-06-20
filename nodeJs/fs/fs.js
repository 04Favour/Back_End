const fileSystem = require('fs');

// const fs = fileSystem.readFile('favour.txt',(err,data)=>{
//     if(err){
//         console.log('something went wrong');
//     }
//     console.log(data.toString());
// })

const writeFiles = fileSystem.writeFile('favour.txt', 'Today is thursday', (err) => {
    if (err) throw err;
    console.log('saved!');
})

module.exports = {writeFiles} 
