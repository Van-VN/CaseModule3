 const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const handlers = require("./src/controller/mainController");
const qs = require("qs");

const database = require('../CaseModule3/src/models/database')
const server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url).pathname;

  let chosenHandlers =
    typeof router[parsedUrl] !== undefined
      ? router[parsedUrl]
      : handlers.notFound;
  chosenHandlers(req, res);
});

database.connect()
const router = {
  "/": handlers.displayDefault,
  "/search": handlers.searchQuery,
  "/public/css/style.css": handlers.writeCSS,
  "/public/images/logoBlackMain.png": handlers.writeMainLogo,
  "/public/images/desktopHero1.jpg": handlers.writeCarousel1stIMG,
  "/public/images/desktopHero2.jpg": handlers.writeCarousel2ndIMG,
  "/public/images/desktopHero3.jpg": handlers.writeCarousel3rdIMG,
  "/public/images/favicon.ico": handlers.writeFavicon,
  "/public/js/index.js": handlers.writeClientJS,
};
server.listen(8000, () => console.log(`Server started!`));
