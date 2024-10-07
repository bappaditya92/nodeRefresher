// //Http module

const http = require("http");
const fs = require("fs");
const path = require("path");

const app = http.createServer((req, res) => {
  res.writeHead(200, {
    "content-type": "text/html",
  });

  if (req.url === "/") {
    fs.readFile(
      path.join(__dirname, "public", "index.html"),
      (err, content) => {
        if (err) {
          throw err;
        }
        res.end(content);
      }
    );
  } else if (req.url === "/about") {
    fs.readFile(
      path.join(__dirname, "public", "about.html"),
      (err, content) => {
        if (err) {
          throw err;
        }
        res.end(content);
      }
    );
  }
});

const PORT = process.env.PORT || 3000;
app.listen(3000);
console.log(`Server is listening on ${PORT}`);
