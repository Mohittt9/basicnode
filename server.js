const http = require('http');    //for require http module
const fs = require('fs');       //for require file system module
const path = require('path');    //for require path module
const ejs = require('ejs');     //for require ejs module
const { url } = require('inspector');

const __direname = path.join(__dirname,'views');  //set views directory path



// create server and handle requests so that it serves different ejs files based on the URL path
const server = http.createServer((req,res) =>{  

     if (req.url === "/style.css") {    // Serve CSS file
    const cssPath = path.join(__dirname, "public", "style.css");  
    res.writeHead(200, { "Content-Type": "text/css" });
    fs.createReadStream(cssPath).pipe(res);
    return;
  }

   if (req.url === '/') {
        ejs.renderFile(path.join(__direname, 'index.ejs'), {}, (err, str) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error rendering file');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                console.log(req.url);
                res.end(str);
            }
        });

    } else if (req.url === '/about') {
        ejs.renderFile(path.join(__direname, 'about.ejs'), {}, (err, str) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error rendering file');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                console.log(req.url);
                res.end(str);
            }
        });
    } else if (req.url === '/contact') {
        ejs.renderFile(path.join(__direname, 'contact.ejs'), {}, (err, str) => {
            if (err) {
                res.writeHead(500, {'Content-Type': 'text/plain'});
                res.end('Error rendering file');
            } else {
                res.writeHead(200, {'Content-Type': 'text/html'});
                console.log(req.url);
                res.end(str);
            }
        });
    }  else {
        res.writeHead(404, {'Content-Type': 'text/plain'});
        console.log(req.url);
        res.end('Page not found');
    }
});

const PORT = 3000;
server.listen(PORT,() => {
    console.log(`Server is running on http://localhost:${PORT}`);
})
 