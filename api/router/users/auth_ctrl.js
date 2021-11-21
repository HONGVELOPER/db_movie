const Joi = require("joi");
const models = require("../../models");

const register = async (req, res) => {
    // Request Body Check
    const schema = Joi.object().keys({
        email: Joi.string().required(),
        username: Joi.string().required(),
        password: Joi.string().required(),
        birth: Joi.string().required(),
        phone: Joi.string().required(),
    });
    const result = schema.validate(req.body);
    if (result.error) {
        // 403 Forbidden
        res.status(403).send(res.error);
        return;
    }

    //duplicated email check
    const { email, password, username, phone, birth } = req.body;
    try {
        // is duplicate
        const exists = await models.U_USER.findAll({
            raw: true,
            attributes: "U_EMAIL",
            where: {
                U_EMAIL: email,
            },
        });
        await models.U_USER.create({
            U_EMAIL: email,
            U_PASSWORD: password,
            U_NAME: username,
            U_PH_NUM: phone,
            U_BIRTH: birth,
        });
        res.status(201).send(); // 201 Created
    } catch (err) {
        // 409, Conflict email!
        res.status(409).send(res.error);
        return;
    }
};

const login = async (req, res) => {
    // login
    console.log("login button click!!");
    const userInfo = await models.U_USER.findAll({
        raw: true,
        attributes: ["U_EMAIL", "U_PASSWORD", "U_NAME"],
        where: {
            U_EMAIL: req.body.email,
            U_PASSWORD: req.body.password,
        },
    });
    //console.log("userInfo : " + JSON.stringify(userInfo));
    if (userInfo[0]) res.status(200).send();
    else res.status(400).send();
};

//const check

module.exports = { register, login };
