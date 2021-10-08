const router = require('express').Router();
const reserverFunctions = require('./reserveFunction.js');

// 영호 관련 Router

router.get('/list', async (req, res) => {
    console.log('진입!')
    const userInfo = await reserverFunctions.getUser()
    console.log(userInfo, 'index user info') 
    res.json({userInfo: userInfo})
})

module.exports = router;