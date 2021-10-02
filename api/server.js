const express = require('express'); // express 모듈 선언
const app = express(); // express 객체로 선언
// const route = require('./router/index'); // api 경로 (router code)
const port = process.env.PORT || 3001;

// DB ORM 연동
const sequelize = require('./models/index').sequelize
sequelize.sync()

// body-parser
app.use(express.json())

// 라우팅 등록 (api 경로)
const reserve = require('./router/reserve/index')
const commute = require('./router/commute/index')


// 라우팅 분기
app.use('/api/reserve', reserve)
app.use('/api/commute', commute)


// 포트 선언
app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
});

