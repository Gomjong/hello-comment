const { Pool } = require("pg");

const pool = new Pool({
  user: "hello",
  host: "localhost",
  database: "hello_comment",
  password: "hello1234",
  port: 5432,
});


const express = require("express");

const app = express();

app.use(express.urlencoded({ extended: true }));

app.use(express.static("public")); // 브라우저가 요청한 파일이 public 폴더 안에 있으면 그대로 보내주라는 뜻


app.post("/comment", async (req, res) => {

    await pool.query(
        "INSERT INTO comments (comment) VALUES ($1)",
        [req.body.comment]
    );

    res.redirect("/");
});

app.get("/comments", async (req, res) => {

    const result = await pool.query(
        "SELECT * FROM comments"
    );

    res.send(result.rows);
  });

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});