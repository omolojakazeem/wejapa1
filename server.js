let http = require("http");

let thisSite = http.createServer(function (req, res) {
  if (req.url == "/" && req.method == "GET") {
    res.end("Hello World, Welcome to WeJapa Internships");
  } else if (req.url == "/" && req.method == "POST") {
    let name = "";
    req.on("data", (chunk) => {
      name += chunk.toString();
      // convert Buffer to string
      name = JSON.stringify(name);
      name = name.replace("name=", "");
    });
    req.on("end", () => {
      res.end(`Hello ${name}, Welcome to WeJapa Internships`);
    });
  }
});

thisSite.listen(3000);
