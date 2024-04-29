const express = require("express");
const app = express();

let db = new Map();

let notebook = {
  productName: "Notebook",
  price: 2000000,
};

let cup = {
  productName: "cup",
  price: 3000,
};

let chair = {
  productName: "Chair",
  price: 100000,
};

let poster = {
  productName: "Poster",
  price: 20000,
};

db.set(1, notebook);
db.set(2, cup);
db.set(3, chair);
db.set(4, poster);

app.listen(1234);

app.get("/:id", function (req, res) {
  let {id} = req.params;
  id = parseInt(id);
  if (db.get(id) === undefined) {
    res.json({
      message: "없는 상품입니다.",
    });
  } else {
    product = db.get(id);
    product.id = id;
    res.json(product);
  }
});
