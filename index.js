import http from 'http';
import fs from 'fs';
import { URL } from 'url';

http.createServer((req, res) => {
    const reqUrl = new URL (req.url, `http://${req.headers.host}`);
    if (reqUrl.pathname === '/') {

    }
    
    const fileName = reqUrl.pathname === '/'
        ? './index.html'
        : `.${reqUrl.pathname}.html`;

    console.log(reqUrl.pathname);
    
    if (reqUrl.pathname === '/favicon.ico') {
        res.writeHead(204, { 'Content-Type': 'image/x-icon' });
        res.end();
        return;
    }
    
    fs.readFile(fileName, (err, data) => {
        if (err) {
            fs.readFile('./404.html', (err404, data404) => {
                res.writeHead(404, {'Content-Type': 'text/html'});
                res.write(data404);
                res.end();
            })
            return;
        }
        res.writeHead(200, {'Content-Type': 'text/html'});
        res.write(data);
        res.end();
    })
}).listen(8080);