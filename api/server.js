const express = require('express'); // express 모듈 선언
const app = express(); // express 객체로 선언
const route = require('./router/index'); // api 경로 (router code)
const port = process.env.PORT || 3001;

// 라우팅 등록
const reserve = require('./router/reserve')

app.use(express.json())

const sequelize = require('./models/index').sequelize
sequelize.sync()

app.use('/api', route)

app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
});

