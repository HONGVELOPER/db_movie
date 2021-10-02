const router = require('express').Router();
const reserverFunctions = require('./reserveFunction.js');

// 영호 예매 및 취소 router


router.get('/list', (req, res) => {
    console.log('진입!')
    res.json({username:'api test youngjin'})
})

module.exports = router