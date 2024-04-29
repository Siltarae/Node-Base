const express = require("express");
const app = express();

// app.get("/products/:n", function (req, res) {
//   const param = req.params;

//   let number = parseInt(param.n);

//   res.json({
//     channel: number,
//   });
// });

// 주소 localhost:1234/watch?v=KMhf4ex3d&t=2430
app.get("/watch", function (req, res) {
  const q = req.query;
  res.json({
    video: q.v,
    timeline: q.t,
  });
});

app.listen(1234);
