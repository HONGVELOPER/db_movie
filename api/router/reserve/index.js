const router = require('express').Router();
const reserverFunctions = require('./reserveFunction.js');
const models = require('../../models')

// 영화 예매 관련 Router

router.get('/getInfo', async (req, res) => {
    const result = {}
    const movieInfo = await models.M_MOVIE.findAll({
        attributes: ['M_CODE', 'M_NAME'],
        raw: true
    })
    const branchInfo = await models.B_BRANCH.findAll({
        attributes: ['B_CODE', 'B_NAME'],
        raw: true,
    })
    result.movie = movieInfo
    result.branch = branchInfo
    res.json(result)
})

router.get('/date', async (req, res) => {
    const dateInfo = await models.M_THEATER.findAll({
        raw: true,
        attributes: ['MT_CODE', 'MT_RUNNING_DATE'],
        group: ['MT_RUNNING_DATE'],
        where: {
            M_CODE: req.query.movieCode,
            B_CODE: req.query.branchCode
        }
    })
    res.json(dateInfo)
})

router.get('/time', async (req, res) => {
    const timeInfo = await models.M_THEATER.findAll({
        raw: true,
        attributes: ['MT_CODE', 'MT_SCREEN_SPACE', 'MT_FORMAT', 'MT_TOTAL_SEAT', 'MT_START_TIME', 'MT_AVAIL_SEAT'],
        where: {
            MT_RUNNING_DATE: req.query.theaterDate,
        }
    })
    res.json(timeInfo)
})

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