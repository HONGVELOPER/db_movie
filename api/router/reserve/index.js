const router = require('express').Router();
const reserverFunctions = require('./reserveFunction.js');

// 영화 관련 Router

router.get('/list', async (req, res) => {
    console.log('진입!')
    const userInfo = await reserverFunctions.getUser()
    console.log(userInfo, 'index user info') 
    res.json({userInfo: userInfo})
})

router.post('/test', async (req, res) => {
    console.log(req.body)
    res.status(200).send();
})

module.exports = router;