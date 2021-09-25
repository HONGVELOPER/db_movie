const express = require('express');
const router = express.Router()

// express 4.17.1 에는 body-parser 내장 되어 있어 추가 설치 필요 없음

router.get('/', (req, res) => {
    res.send('Hello World');
})

module.exports = router;