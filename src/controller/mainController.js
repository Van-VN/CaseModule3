const fs = require("fs");
const handlers = {};

handlers.displayDefault = (req, res) => {
  fs.readFile("./src/views/index.html", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

handlers.writeCSS = (req, res) => {
  res.writeHead(200, { "Content-Type": "text/css" });
  res.write(fs.readFileSync("./public/css/style.css"));
  res.end();
};

handlers.writeClientJS = (req, res) => {
  fs.readFile("./public/js/index.js", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.writeHead(200, { "Content-Type": "text/js" });
      res.write(data);
      res.end();
    }
  });
};

handlers.writeCarousel1stIMG = (req, res) => {
  fs.readFile("./public/images/desktopHero1.jpg", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.write(data);
      res.end();
    }
  });
};

handlers.writeCarousel2ndIMG = (req, res) => {
  fs.readFile("./public/images/desktopHero2.jpg", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.write(data);
      res.end();
    }
  });
};

handlers.writeCarousel3rdIMG = (req, res) => {
  fs.readFile("./public/images/desktopHero3.jpg", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.write(data);
      res.end();
    }
  });
};

handlers.writeMainLogo = (req, res) => {
  fs.readFile("./public/images/logoBlackMain.png", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.write(data);
      res.end();
    }
  });
};

handlers.writeFavicon = (req, res) => {
  fs.readFile("./public/images/favicon.ico", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.writeHead(200, { "Content-Type": "image/jpg" });
      res.write(data);
      res.end();
    }
  });
};

handlers.notFound = (req, res) => {
  res.end(`404`);
};

module.exports = handlers;
