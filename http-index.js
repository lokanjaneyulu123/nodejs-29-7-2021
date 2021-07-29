const http = require('http');
const fs = require('fs');

const server = http.createServer((req, res) => {
    // console.log(req.url);
    if (req.url == "/"){
    res.end("hello from other side:) lok");
    }
    else if (req.url == "/about"){
        res.end("about us:");
    }
    else if (req.url == "/user-api"){
        fs.readFile(`${__dirname}/user-api/api-index.json`, "utf-8", (err, data) => {
            console.log(data);
            res.end(data);
        });
        // res.end("about us:");
    }
    else if (req.url == "/contact"){
        //either
        res.write("contact us:))");
        res.end();

        //or
        // res.end("contact us:");
    }
    else{
        res.writeHead(404, {"Content-type" : "text/html"}); //client error
        res.end("<h1>404</h1>-page doesn't exist");
    } 
});

server.listen(8000, "127.0.0.1", () => {
    console.log("listening to the port no 8000");
});