

const fs = require('fs');
const http = require('http');

const server = http.createServer();
server.on('request', (req, res) => {
//1st way
//     var fs = require('fs');
//     fs.readFile('stream-input.txt', (err, data) => {
//         if (err) return console.error(err);
//         res.end(data.toString());
//     });    //general file reading without streaming


//reading from a stream
//create a readable stream 
//handle stream events --> data, end, and error

//2nd way
// const rstream = fs.createReadStream('stream-input.txt');
// rstream.on('data', (chunkdata) => {
//     res.write(chunkdata);
// });
//     rstream.on('end', () => {
//         res.end();
//     });
//     rstream.on('error', (err) => {
//         console.log(err);
//         res.end('file not found');
//     });   //file reading with streaming

//3rd way 
const rstream = fs.createReadStream('stream-input.txt');
rstream.pipe(res);
});

server.listen(8000, "127.0.0.1");