const http = require('http')
// req and res are objects which have diffrent methods
const server = http.createServer((req, res)=>{
    if(req.url === '/'){
        res.end(` <h1>Welcome to our home page </h1>`)
    }
    else if(req.url === '/about'){
        res.end(' <h1>This is some history about us</h1>')
    }
    else{
        res.end(`<h1> Ooops!!</h1>
        <p> the page you are looking for is not here</p>`)
    }
})

server.listen(5000);

