let http = require('http');
let fs = require('fs');
let url = require('url');

let app = http.createServer(function(request,response){
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  //console.log(_url);
  //console.log(queryData);
  //console.log(queryData.id);
  if(_url == '/'){
    _url = '/index.html';
  }
  if(_url == '/favicon.ico'){
    response.writeHead(404);
    response.end();
    return;
  }
  response.writeHead(200);
  //console.log(__dirname + _url);
  //response.end(fs.readFileSync(__dirname + _url));
  response.end(queryData.id);
});
app.listen(3000);