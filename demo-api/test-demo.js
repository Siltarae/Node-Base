const express = require("express");
const app = express();

app.get("/test", function (req, res) {
  res.send("TEST SUCCESS");
});

app.get("/test/1", function (req, res) {
  res.send("One!!");
});

app.listen(1234);
