const express = require('express'); // express 모듈 선언
const app = express(); // express 객체로 선언
const api = require('./router/index'); // api 경로 (router code)
const cors = require('cors');
// react port: 3000 / express server port :3001
app.use(cors())
// 따라서 다른 port 간에 데이터 전송을 허가 하기 위해 cors 작업
app.use(express.json())
// express 4.17.1 에는 body-parser 가 내장되어 있어서 따로 다운받을 필요 없이
// 바로 json 형태로 데이터 받겠다 라는 선언

app.use('/', api)

const port = process.env.PORT || 3001;

app.listen(port, () => {
    console.log(`Express is running on port ${port}`)
});