const http = require('http');
//const fs = require('fs');
var nStatic = require('node-static');

var fileServer = new nStatic.Server('./public');

/*const options = {
    key: fs.readFileSync('certifications/key.pem'),
    cert: fs.readFileSync('certifications/cert.pem')
};*/

http.createServer(function (req, res) {
    fileServer.serve(req, res);
}).listen(8080);