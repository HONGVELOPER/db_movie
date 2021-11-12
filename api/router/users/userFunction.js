const { M_USER } = require("../../models");
const userFunctions = {};

userFunctions.getUSer = async () => {
    try {
        const result = await M_USER.findAll({});
        return result[0].dataValues;
    } catch (err) {
        console.log(err);
    }
};

module.exports = userFunctions;
