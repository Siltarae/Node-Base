const express = require("express");
const app = express();

app.listen(1234);

let youtuber1 = {
  channelTitle: "십오야",
  sub: "633만명",
  videoNum: "1.1천개",
};

let youtuber2 = {
  channelTitle: "침착맨",
  sub: "243만명",
  videoNum: "6.9천개",
};

let youtuber3 = {
  channelTitle: "테오",
  sub: "87.5만명",
  videoNum: "870개",
};

let db = new Map();

for (let i of [youtuber1, youtuber2, youtuber3]) {
  db.set(db.size + 1, i);
}
app.use(express.json());

//REST API 설계
app.get("/youtubers", (req, res) => {
  res.json({
    message: "test",
  });
});

app.get("/youtuber/:id", (req, res) => {
  let {id} = req.params;
  id = parseInt(id);

  const youtuber = db.get(id);

  if (youtuber == undefined) {
    res.json({
      message: "유튜버 정보를 찾을 수 없습니다.",
    });
  } else {
    res.json(youtuber);
  }
});

app.post("/youtuber", (req, res) => {
  console.log(req.body);

  db.set(db.size + 1, req.body);
  res.json({
    message: `${req.body.channelTitle}님, 유튜버 생활을 응원합니다.`,
  });
});
