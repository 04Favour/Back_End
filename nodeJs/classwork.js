const classWork = require('node:fs');

const classRead = classWork.readFile('fred.txt','utf-8', (err, data) => {
    if (err){
        console.log('File missing')
    }
    console.log(data.toString());

})

const classWrite = classWork.writeFile('fred.txt', 'Completed the class work on node modules', (err) => {
    if (err) throw err;
    console.log('Completed!')
});
module.exports = {classWrite, classRead}