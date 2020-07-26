let http = require("http");

let thisSite = http.createServer(function (req, res) {
  if (req.url == "/" && req.method == "GET") {
    res.end("Hello World, Welcome to WeJapa Internships");
  } else if (req.url == "/" && req.method == "POST") {
    let name = "";
    res.end(`Hello, ${name}`);
  }
});

thisSite.listen(3000);
