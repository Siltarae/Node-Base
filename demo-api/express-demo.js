const express = require("express");
const app = express();

app.get("/", function (req, res) {
  res.send("Hello World");
});

app.get("/test", function (req, res) {
  res.send("TEST SUCCESS");
});

app.get("/test/1", function (req, res) {
  res.send("One!!");
});

app.get("/hello", function (req, res) {
  res.json({say: "안녕하세요"});
});

app.get("/bye", function (req, res) {
  res.json({say: "안녕히 가세요"});
});

app.get("/nicetomeetyou", function (req, res) {
  res.json({say: "만나서 반갑습니다."});
});

let nodejsbook = {
  title: "Node.js를 공부해보자",
  price: 20000,
  descrption: "이책 좋은 왜? 김송아가 지음",
};

app.get("/products/1", function (req, res) {
  res.json(nodejsbook);
});
app.listen(1234);
