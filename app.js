const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public")); // 브라우저가 요청한 파일이 public 폴더 안에 있으면 그대로 보내주라는 뜻

const comments = [];

app.post("/comment", (req, res) => {
  comments.push(req.body);

  res.redirect("/");
});

app.get("/comments", (req, res) => {
  res.send(comments);
});

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});