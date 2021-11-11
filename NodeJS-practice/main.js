let http = require('http');
let fs = require('fs');
let url = require('url');

let app = http.createServer(function(request,response){
  let _url = request.url;
  console.log(_url);
  if(_url == '/'){
    _url = '/index.html';
  }
  if(_url == '/favicon.ico'){
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  //console.log(__dirname + url);
  response.end(fs.readFileSync(__dirname + _url));
});
app.listen(3000);