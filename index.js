const http = require("http");
const fs = require("fs");
const url = require("url");
const path = require("path");

const html = fs.readFileSync(`${__dirname}/index.html`, "utf-8");
const output = html.replace(/.min/g, "");
// console.log(output)

const server = http.createServer((req, res) => {
  console.log(req.url);
  if (req.url === "/" || req.url === "index.html") {
    res.writeHead(200, {
      "content-type": "text/html",
    });
    res.end(output);
  } else if (req.url.match(".css$")) {
    const cssPath = path.join(__dirname, req.url);
    fs.readFile(cssPath, (e, d) => {
      res.writeHead(200, {
        "content-type": "text/css",
      });
      res.end(d);
    });
  } else if (req.url.match(".js$")) {
    const jsPath = path.join(__dirname, req.url);
    fs.readFile(jsPath, (e, d) => {
      res.writeHead(200, {
        "content-type": "text/js",
      });
      res.end(d);
    });
  } else if (req.url.match(".woff2$")) {
    const woff2Path = path.join(__dirname, req.url);
    fs.readFile(woff2Path, (e, d) => {
      res.writeHead(200, {
        "content-type": "text/woff2",
      });
      res.end(d);
    });
  } else if (req.url.match(".webp$")) {
    const webpPath = path.join(__dirname, req.url);
    fs.readFile(webpPath, (e, d) => {
      res.writeHead(200, {
        "content-type": "image/webp",
      });
      res.end(d);
    });
  }
});

server.listen(8000, "127.0.0.1", () => {
  console.log("server is running on port 8000");
});
