const fs = require("fs");
const qs = require("qs");
const handlers = {};

handlers.signIn = (req, res) => {
  fs.readFile("./src/views/signin.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

handlers.signUp = (req, res) => {
  fs.readFile("./src/views/signup.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

handlers.displayDefault = (req, res) => {
  fs.readFile("./src/views/index.html", "utf-8", (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      res.writeHead(200, { "Content-Type": "text/html" });
      res.write(data);
      res.end();
    }
  });
};

handlers.displayDashboard = (req, res) => {
  fs.readFile("./src/views/dashboard.html", "utf-8", (err, data) => {
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
  fs.readFile("./public/js/index.js", "utf-8", (err, data) => {
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
