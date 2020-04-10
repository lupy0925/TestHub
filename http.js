var http = require('http');
http.createServer((req, res)=>{
console.log(req.url);
res.writeHead(200, {"Content-Type": "text/html;charset='utf-8'"});
res.write('this is node.js');

res.end();
}).listen(3000);

