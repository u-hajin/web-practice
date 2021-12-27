let http = require('http');
let fs = require('fs');
let url = require('url');

function templateHTML(title, list, body) {
  return `
  <!doctype html>
  <html>
  <head>
    <title>WEB1 - ${title}</title>
    <meta charset="utf-8">
  </head>
  <body>
    <h1><a href="/">WEB</a></h1>
    ${list}
    <a href="/create">create</a>
    ${body}
  </body>
  </html>
  `;
}

function templateList(filelist) {
  let list = '<ul>';
  for (let i = 0; i < filelist.length; i++) {
    if (filelist[i] === 'Welcome') {
      continue;
    }
    list += `<li><a href="/?id=${filelist[i]}">${filelist[i]}</a></li>`
  }
  list += '</ul>'
  return list;
}

let app = http.createServer(function (request, response) {
  let _url = request.url;
  let queryData = url.parse(_url, true).query;
  let pathname = url.parse(_url, true).pathname;
  let title = queryData.id;
  //console.log(_url);
  //console.log(queryData);
  //console.log(queryData.id);

  //console.log(url.parse(_url, true).pathname);
  if (pathname === '/') {
    if (title === undefined) {
      title = 'Welcome';
    }
    fs.readdir('./data', function (error, filelist) {
      let list = templateList(filelist);
      fs.readFile(`data/${title}`, 'utf8', function (err, description) {
        let template = templateHTML(title, list, `<h2>${title}</h2>${description}`);
        response.writeHead(200);
        response.end(template);
      });
    });
  } else if (pathname === '/create') {
    fs.readdir('./data', function (error, filelist) {
      title = 'WEB - create';
      let list = templateList(filelist);
      let template = templateHTML(title, list, `
        <form action="http://localhost:3000/process_create" method="post">
          <p><input type="text" name="title" placeholder="title"></p>
          <p>
            <textarea name="description" placeholder="description"></textarea>
          </p>
          <p>
            <input type="submit">
          </p>
        </form>
      `);
      response.writeHead(200);
      response.end(template);
    });
  } else {
    response.writeHead(404);
    response.end('Not found');
  }

  //console.log(__dirname + _url);
  //response.end(fs.readFileSync(__dirname + _url));

});
app.listen(3000);