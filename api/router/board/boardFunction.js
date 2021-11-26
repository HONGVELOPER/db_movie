const Board = require('../models/board')
const boardFunctions = {}

boardFunctions.getUser = async () => {
    try {
        const result = await M_USER.findAll({
            where: {}
        })
        return result[0].dataValues
    } catch (err) {
        console.log(err)
    }
}

module.exports = boardFunctions;