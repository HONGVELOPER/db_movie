const router = require('express').Router();
// const reserverFunctions = require('./reserveFunction.js');
const models = require('../../models')
const { sequelize } = require('../../models');

// 영화 예매 관련 Router

router.get('/movieInfo', async (req, res) => {
    const result = {}
    try {
        const movieInfo = await models.M_MOVIE.findAll({
            raw: true,
            attributes: ['M_CODE', 'M_NAME', 'M_AGE_LIMIT'],
        })
        const branchInfo = await models.B_BRANCH.findAll({
            raw: true,
            attributes: ['B_CODE', 'B_NAME'],
        })
        result.movie = movieInfo
        result.branch = branchInfo
    } catch (err) {
        console.error(err)
    }
    res.json(result)
})

router.get('/seatInfo', async (req, res) => {
    const result = {}
    try {
        const seatInfo = await models.M_SEAT.findAll({
            raw: true,
            where: {
                MT_CODE: req.query.mtCode,
            },
        })
        const reservedSeatInfo = await models.M_RESERVE_SEAT.findAll({
            raw: true,
            where: {
                MT_CODE: req.query.mtCode
            }
        })
        result.seat = seatInfo
        result.reservedSeat = reservedSeatInfo
        } catch (err) {
            console.error(err)
        }
        res.json(result)
})

router.get('/date', async (req, res) => {
    try {
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
    } catch (err) {
        console.error(err)
    }
})

router.get('/time', async (req, res) => {
    try {
        const timeInfo = await models.M_THEATER.findAll({
            raw: true,
            attributes: ['MT_CODE', 'MT_SCREEN_SPACE', 'MT_FORMAT', 'MT_TOTAL_SEAT', 'MT_START_TIME', 'MT_AVAIL_SEAT'],
            where: {
                MT_RUNNING_DATE: req.query.theaterDate,
            }
        })
        res.json(timeInfo)
    } catch (err) {
        console.error(err)
    }
})

router.post('/pay', async (req, res) => {
    const result = {}
    try {
        const reserveInfo = await models.M_RESERVE_INFO.create({
            MT_CODE: req.body.params.mtCode,
            MRI_EMAIL: req.body.params.email,
        })
        for (const seat of req.body.params.msCode) {
            await models.M_RESERVE_SEAT.create({
                MS_CODE: seat,
                MRI_CODE: reserveInfo.dataValues.MRI_CODE,
                MT_CODE: reserveInfo.dataValues.MT_CODE
            })
        }
        await models.M_THEATER.update({
            MT_AVAIL_SEAT: sequelize.literal(`MT_AVAIL_SEAT - ${req.body.params.msCode.length}`),
            MT_RESERVED_SEAT: sequelize.literal(`MT_RESERVED_SEAT + ${req.body.params.msCode.length}`),
        }, {
            where: {
                MT_CODE: req.body.params.mtCode,
            }
        })
        result.mriCode = reserveInfo.dataValues.MRI_CODE
        result.email = reserveInfo.dataValues.MRI_EMAIL
        result.price = req.body.params.price
        res.status(200).json(result)
    } catch (err) {
        console.error(err)
    }
})

module.exports = router;