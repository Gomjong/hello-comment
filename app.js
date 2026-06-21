const http = require("http");
const querystring = require("querystring");

const comments = [];

const server = http.createServer((request, response) => {
  // GET /
  // 댓글 입력 화면
  if (request.method === "GET" && request.url === "/") {
    response.setHeader("Content-Type", "text/html; charset=utf-8");
    response.end(`
      <h1>Hello Comment</h1>

      <form action="/comment" method="POST">
        <p>댓글</p>
        <input name="comment" />
        <button type="submit">작성</button>
      </form>
    `);
    return;
  }

  // GET /comments
  // 댓글 목록 JSON 응답
  if (request.method === "GET" && request.url === "/comments") {
    response.setHeader("Content-Type", "application/json; charset=utf-8");
    response.end(JSON.stringify(comments));
    return;
  }

  // POST /comment
  // 댓글 저장
  if (request.method === "POST" && request.url === "/comment") {
    let body = "";

    request.on("data", (chunk) => {
      body += chunk;
    });

    request.on("end", () => {
      const parsedBody = querystring.parse(body);

      comments.push({
        comment: parsedBody.comment,
      });

      response.statusCode = 302;
      response.setHeader("Location", "/");
      response.end();
    });

    return;
  }

  response.statusCode = 404;
  response.end("Not Found");
});

server.listen(3000);