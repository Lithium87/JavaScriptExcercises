const fs = require('fs');
const http = require('http');
const url = require('url');

const tempOverview = fs.readFileSync(`${__dirname}/templates1/overview`, 'utf-8');
const tempCard = fs.readFileSync(`${__dirname}/templates1/card`, 'utf-8');
const tempProduct = fs.readFileSync(`${__dirname}/templates1/product`, 'utf-8');

const data = fs.readFileSync(`${__dirname}/dev-data/data.json`, 'utf-8');
const dataObj = JSON.parse(data);

const server = http.createServer((req, res) => {
    const pathName = req.url;

    //Overview page
    if(pathName === '/' || pathName === '/overview') {
        res.writeHead(200, {
            'Content-type': 'text/html'
        });
        res.end(tempOverview);

    //API
    } else if(pathName === '/api') {
        res.writeHead(200, {
            'Content-type': 'application/json'
        });
        res.end(data);
    //Product page
    } else if(pathName === '/product') {
        res.end('This is an PRODUCT');
    
    //Not found
    } else {
        res.writeHead(404, {
            'Content-type': 'text/html'
        });
        res.end('<h1>Page not found!</h1>');
    }
});

server.listen(8000, '127.0.0.1', () => {
    console.log('Listening for requests on port 8000');
    
});

