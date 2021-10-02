const { M_USER, M_MOVIE } = require('../../models')
const reserverFunctions = {}

reserverFunctions.getUser = async () => {
    try {
        const result = await M_USER.findAll({
            where: {}
        })
        return result[0].dataValues
    } catch (err) {
        console.log(err)
    }
}

module.exports = reserverFunctions;