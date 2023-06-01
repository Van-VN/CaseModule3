const fs = require("fs");
const qs = require("qs");
const handlers = {};
const UserController = require('./userController/userController')
handlers.displayDefault = async (req, res) => {
  // let info = await UserController.findById(7)
  // console.log(info)
  let info = 1
  fs.readFile("./src/views/index.html", 'utf-8',(err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      if(info === 1){
      data = data.replace('/signin', 'https://www.facebook.com/')
      data = data.replace('Sign In', 'Ahihi')
        res.write(data);
        res.end();
      }
      else {
        res.write(data);
        res.end();
      }

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

handlers.searchQuery = (req, res) => {
  let parsedData = "";
  if (req.method === "GET") {
    fs.readFile("./src/views/index.html", "utf8", (err, data) => {
      req.on("data", (chunk) => {
        parsedData += chunk;
      });
      req.on("end", () => {
        parsedData = qs.parse(parsedData);
        res.end();
      });
    });
  }
};

module.exports = handlers;
