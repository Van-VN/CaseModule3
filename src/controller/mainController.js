const fs = require("fs");
const qs = require("qs");
const handlers = {};
const ActressModel = require("../model/actress.model");

handlers.signIn = (req, res) => {
  if (req.method === "GET") {
    fs.readFile("./src/views/signin.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else {
    let loggedInData = "";
    req.on("data", (chunk) => {
      loggedInData += chunk;
      console.log(loggedInData);
    });
    req.on("end", () => {
      fs.writeFile("././session/user.json", loggedInData, "utf-8", (err) => {
        if (err) {
          console.log(err.message);
        } else {
          console.log(`Data submited`);
        }
      });
    });
  }
};

handlers.signUp = (req, res) => {
  if (req.method === "GET") {
    fs.readFile("./src/views/signup.html", "utf-8", (err, data) => {
      if (err) {
        console.log(err.message);
      } else {
        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      }
    });
  } else {
    res.writeHead(301, { Location: "/signin" });
    res.end();
  }
};

handlers.displayDefault = (req, res) => {
  fs.readFile("./src/views/index.html", "utf-8", async (err, data) => {
    if (err) {
      console.log(err.message);
    } else {
      try {
        let model = await ActressModel.displayAllActress();
        let html = "";

        model.forEach((item) => {
          html += '<div class="row">';
          html += '<div class="col-sm">';
          html += '<div class="card" style="width: 18rem">';
          html += '<img class="card-img-top" src="';
          //   html += item.url;
          html +=
            "https://cdn.24h.com.vn/upload/4-2021/images/2021-10-30/Thien-than-phim-18--dau-gia-anh-nong-fan-do-xo-gianh-giat-chiec-ve-yua-mikami--1--1635606665-682-width660height825.jpg";
          html += '"src="{jav-img-url}" alt="Card image cap"/>';
          html += '<div class="card-body">';
          html += '<h5 class="card-title">';
          html += item.name;
          html += '</h5><p class="card-text">';
          html += item.age;
          html += '</p><a href="#" class="btn btn-primary cards-btn">';
          html += "Go somewhere</a></div></div></div></div>";
        });

        data = data.replace("{card-template-model}", html);

        res.writeHead(200, { "Content-Type": "text/html" });
        res.write(data);
        res.end();
      } catch (err) {
        console.log(err.message);
      }
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
