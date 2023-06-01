const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");
const handlers = require("./src/controller/mainController");
const qs = require("qs");

const server = http.createServer((req, res) => {
  let parsedUrl = url.parse(req.url, true).pathname;
  console.log(router[parsedUrl]);

  let chosenHandlers;
  if (typeof router[parsedUrl] !== "undefined") {
    chosenHandlers = router[parsedUrl];
  } else {
    chosenHandlers = handlers.notFound(req, res);
  }

  //   let chosenHandlers =
  //     typeof router[parsedUrl] !== undefined
  //       ? router[parsedUrl]
  //       : handlers.notFound(req, res);
  chosenHandlers(req, res);
});

const router = {
  "/": handlers.displayDefault,
  "/signin": handlers.signIn,
  "/signup": handlers.signUp,
  "/search": handlers.searchQuery,
  "/dashboard": handlers.displayDashboard,
  "/public/css/style.css": handlers.writeCSS,
  "/public/images/logoBlackMain.png": handlers.writeMainLogo,
  "/public/images/desktopHero1.jpg": handlers.writeCarousel1stIMG,
  "/public/images/desktopHero2.jpg": handlers.writeCarousel2ndIMG,
  "/public/images/desktopHero3.jpg": handlers.writeCarousel3rdIMG,
  "/public/images/favicon.ico": handlers.writeFavicon,
  "/public/js/index.js": handlers.writeClientJS,
};
server.listen(8000, () => console.log(`Server started!`));
