const http = require('http');
const {URL} = require('url');

// ASYNCH METHOD (MY PREFFERED)
const fs = require('fs').promises;

const server = http.createServer( async (req, res) => {
    const url = new URL(req.url, `http://${req.headers.host}`);
    const path = url.pathname;
    console.log(path);
    res.writeHead(200, {'Content-Type': 'text/html'});

    try {
        if (path === '/') {
            const data = await fs.readFile('./pages/index.html');
            res.write(data);
        } else {
            const data = await fs.readFile(`./pages${path}.html`);
            res.write(data);
        }
    } catch (err) {
        console.error(err);
        const data = await fs.readFile('./pages/404.html');
        res.write(data);
    } finally {
        res.end();
    }
})

server.listen(8080);

// STANDARD METHOD (MY PREFFERED)

// const fs = require('fs');

// const server = http.createServer( (req, res) => {
//     const url = new URL(req.url, `http://${req.headers.host}`);
//     const path = url.pathname;
//     console.log(url.pathname);
//     res.writeHead(200, {'Content-Type': 'text/html'});
//     if (path === '/') {
//         fs.readFile('./pages/index.html', (err, data) => {
//             if (err) console.error(err);
//             res.write(data);
//             return res.end();
//         })
//     } else {
//         fs.readFile(`./pages${path}.html`, (err, data) => {
//             if (err) {
//                 console.error(err);
//                 // res.write('404 not found');
//                 fs.readFile('./pages/404.html', (err, data) => {
//                     if (err) console.error(err);
//                     res.write(data);
//                     return res.end();
//                 }); 
//             } else {
//                 res.write(data);
//                 return res.end();
//             }
//         })
//     }
// })

// server.listen(8080);