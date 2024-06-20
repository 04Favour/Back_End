const http = require('http');
const server = http.createServer((req,res) => {
    if (req.url === '/'){
        res.write('Welcome to my home page');
    }

   else if(req.url ==='/about'){
        res.write('Welcome to my about page');
    }
    else if(req.url ==='/contact'){
        res.write('Thank you for contacting us');
    }
    else{
        res.write('Sorry page not found');
    }
    res.end();
});
const port = 3000;
server.listen(port, () => console.log(`server running on ${port}`))

module.exports = {server};