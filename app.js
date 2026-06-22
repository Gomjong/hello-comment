const express = require("express");

const app = express();

// Form(body)을 객체(req.body)로 만들어주는 미들웨어
app.use(express.urlencoded({ extended: true }));

// RAM에 저장되는 댓글 배열
const comments = [];

// 메인 페이지
app.get("/", (req, res) => {
  res.send(`
    <h1>Hello Comment</h1>

    <form action="/comment" method="POST">
      <input name="comment" />
      <button type="submit">작성</button>
    </form>
  `);
});

// 댓글 저장
app.post("/comment", (req, res) => {
  comments.push(req.body);

  res.redirect("/");
});

// 댓글 목록 조회
app.get("/comments", (req, res) => {
  res.send(comments);
});

// 서버 실행
app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});