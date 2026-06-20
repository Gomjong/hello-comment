const http = require("http"); 
// Node.js의 내장 HTTP 모듈을 가져와 http 변수에 저장

const server = http.createServer((request, response) => {
    response.end("Hello World");
});
// 웹 서버를 생성하고, Node.js가 request와 response 객체를 만들어서 우리 코드에 전달해줌
// 지금은 request를 받으면 서버는 Hello World를 응답으로 보내고 응답을 종료 (end는 응답 보내기/종료 둘다함)

server.listen(3000);
// 생성한 웹 서버를 3000번 포트에서 실행하고, 클라이언트의 요청을 계속 대기
