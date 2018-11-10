const express = require('express');
const app = express();
const https = require('https');
const http = require('http');
const fs = require("fs");
const cors = require('cors')

const httpsPort = process.env.PACMAN_HTTPS_SERVER_PORT || 8001;
const httpPort = process.env.PACMAN_HTTP_SERVER_PORT || 8000;

const httpsOptions = {
  key: fs.readFileSync("./key/test_key.pem", "utf-8"),
  cert: fs.readFileSync("./key/test_cert.pem", "utf-8"),
};

const httpsServer = https.createServer(httpsOptions, app);
const httpServer = http.createServer(app);

app.use(cors())


app.post('/', function (req, res) {
  

  res.json({
      message:"hieu",
    status: 200
  });

});


httpsServer.listen(httpsPort, function () {
  console.log("https server is running on " + httpsPort);
});

httpServer.listen(httpPort, function () {
  console.log("http server is running on " + httpPort);
});