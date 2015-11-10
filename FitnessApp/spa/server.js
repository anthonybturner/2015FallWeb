var http = require('http');

http.createServer(function(req, res){
    
    
    res.writeHead(200, {'Content-Type': 'text/text'});
    res.end(req.url);
    
}).listen(process.env.PORT);