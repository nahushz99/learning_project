const http = require('http');
const express = require('express');
const fs = require('fs');
const app = express();

// app.use('/static', express.static('static'));
app.use(express.static('ROVEZ_TECHNOLOGY'));

const hostname = '127.0.0.1';
const port = 5000;


const rovez = fs.readFileSync('views/rovez.html')
const rpool = fs.readFileSync('views/rpool.html')
const driverhire = fs.readFileSync('views/driver-hire.html')
const carhire = fs.readFileSync('views/car-hire.html')
const login = fs.readFileSync('views/login.html')

const server = http.createServer((req, res) => {
    console.log(req.url)
    url = req.url;
    // /favicon.ico=>  yachani je pan server madhe open krto te dhakvte
    //  alt press krun upper key press keli tr  varti move hote


    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');

    if (url == '/') {
        res.end(rovez);
    }
    else if (url == '/views/rpool.html') {
        res.end(rpool);
    }
    else if (url == '/views/driver-hire.html') {
        res.end(driverhire);
    }
    else if (url == '/views/car-hire.html') {
        res.end(carhire);
    }
    else if (url == '/views/login.html') {
        res.end(login);
    }
    else {
        res.statusCode = 404;
        res.end("<h1>404 not found</h1>");
    }

});

server.listen(port, hostname, () => {
    console.log(`Server running at http://${hostname}:${port}/`);
});