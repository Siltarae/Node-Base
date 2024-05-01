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

// for (let i of [youtuber1, youtuber2, youtuber3]) {
//   db.set(db.size + 1, i);
// }
app.use(express.json());

//REST API 설계
app.get("/youtubers", (req, res) => {
  let youtubers = {};
  if (db.size) {
    db.forEach((value, key) => {
      youtubers[key] = value;
    });

    res.json(youtubers);
  } else {
    res.status(404).json({
      message: "조회할 유튜버가 없습니다.",
    });
  }
});

app.get("/youtubers/:id", (req, res) => {
  let {id} = req.params;
  id = parseInt(id);

  const youtuber = db.get(id);

  if (db.has(id)) {
    res.json(youtuber);
  } else {
    res.status(404).json({
      message: "유튜버 정보를 찾을 수 없습니다.",
    });
  }
});

app.post("/youtubers", (req, res) => {
  const channelTitle = req.body.channelTitle;
  if (channelTitle) {
    db.set(db.size + 1, req.body);
    res.status(201).json({
      message: `${req.body.channelTitle}님, 유튜버 생활을 응원합니다.`,
    });
  } else {
    res.status(400).json({
      message: "요청 값을 제대로 보내주세요",
    });
  }
});

app.delete("/youtubers/:id", (req, res) => {
  let {id} = req.params;
  id = parseInt(id);

  if (db.has(id)) {
    let youtuber = db.get(id);
    const name = youtuber.channelTitle;
    db.delete(id);
    res.json({
      message: `${name}님, 아쉽지만 우리 인연은 여기 까지`,
    });
  } else {
    res.status(404).json({
      message: `요청하신 ${id}번은 없는 유튜버 입니다.`,
    });
  }
});

app.delete("/youtubers", (req, res) => {
  if (db.size) {
    db.clear();
    res.json({
      message: "전체 유튜버가 삭제되었습니다.",
    });
  } else {
    res.status(404).json({message: "삭제할 유튜버가 없습니다."});
  }
});

app.put("/youtubers/:id", (req, res) => {
  let {id} = req.params;
  id = parseInt(id);

  if (db.has(id)) {
    let youtuber = db.get(id);
    const oldTitle = youtuber.channelTitle;
    const newTitle = req.body.channelTitle;
    youtuber.channelTitle = newTitle;
    db.set(id, youtuber);
    res.json({
      message: `${oldTitle}님 채널명이 ${newTitle}로 수정되었습니다.`,
    });
  } else {
    res.status(404).json({
      message: `요청하신 ${id}번은 없는 유튜버 입니다.`,
    });
  }
});
