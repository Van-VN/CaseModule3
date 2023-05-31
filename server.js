const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url).pathname;
  console.log(parsedUrl);
  if (parsedUrl === "/") {
    fs.readFile("./src/views/index.html", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else if (parsedUrl === "/public/css/style.css") {
    res.writeHead(200, { "Content-Type": "text/css" });
    res.write(fs.readFileSync("./public/css/style.css"));
    res.end();
  } else if (parsedUrl === "/public/images/logoBlackMain.png") {
    fs.readFile("./public/images/logoBlackMain.png", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "image/jpg" });
        res.write(data);
        res.end();
      }
    });
  } else if (parsedUrl === "/public/images/desktopHero1.jpg") {
    fs.readFile("./public/images/desktopHero1.jpg", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "image/jpg" });
        res.write(data);
        res.end();
      }
    });
  }
  else if (parsedUrl === "/public/images/desktopHero2.jpg") {
    fs.readFile("./public/images/desktopHero2.jpg", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "image/jpg" });
        res.write(data);
        res.end();
      }
    });
  } else if (parsedUrl === "/public/images/desktopHero3.jpg") {
    fs.readFile("./public/images/desktopHero3.jpg", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "image/jpg" });
        res.write(data);
        res.end();
      }
    });
  } else if (parsedUrl === "/public/images/favicon.ico") {
    fs.readFile("./public/images/favicon.ico", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "image/jpg" });
        res.write(data);
        res.end();
      }
    });
  } else if (parsedUrl === "/public/js/index.js") {
    fs.readFile("./public/js/index.js", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "text/js" });
        res.write(data);
        res.end();
      }
    });
  } else {
    res.end();
  }
});

server.listen(8000, () => console.log(`Server started!`));
