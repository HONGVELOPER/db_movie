const express = require("express"); // express 모듈 선언
const app = express(); // express 객체로 선언
const port = process.env.PORT || 3001;

// DB ORM 연동
const sequelize = require("./models/index").sequelize;
sequelize.sync();

// body-parser
app.use(express.json());

// 라우팅 등록 (api 경로)
const reserve = require("./router/reserve/index");
const commute = require("./router/commute/index");
const users = require("./router/users/index");
const board = require("./router/board/index");
const pay = require("./router/pay/index");

// 라우팅 분기
app.use("/api/reserve", reserve);
app.use("/api/commute", commute);
app.use("/api/users", users);
app.use("/api/board", board);
app.use("/api/pay", pay);

// 포트 선언
app.listen(port, () => {
  console.log(`Express is running on port ${port}`);
});
