const router = require('express').Router();
const commuteFunctions = require('./commuteFunction.js');

// 직원 관련 Router

router.get('/attend', (req, res) => {
    res.json({username:'출근 했습니다.'})
})

module.exports = router;