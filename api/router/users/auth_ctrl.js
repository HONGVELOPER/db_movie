const Joi = require("joi");
const models = require("../../models/");

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
        res.status(403).send({
            message: "모든 정보를 작성하세요.",
        });
        return;
    }

    const { email, password, username, phone, birth } = req.body;
    // 중복 확인
    const exists = await models.U_USER.findOne({
        where: {
            U_EMAIL: req.body.email,
        },
    });
    if (exists) {
        // 이미 존재한다면
        res.status(409).send({
            message: "중복된 이메일입니다!",
        }); // conflict
        return;
    }

    await models.U_USER.create({
        U_EMAIL: email,
        U_PASSWORD: password,
        U_NAME: username,
        U_PH_NUM: phone,
        U_BIRTH: birth,
    });
    res.status(201).send(); // 201 Created
};

const login = async (req, res) => {
    const userInfo = await models.U_USER.findAll({
        raw: true,
        where: {
            U_EMAIL: req.body.email,
            U_PASSWORD: req.body.password,
        },
    });
    if (userInfo[0]) {
        console.log(userInfo[0], 'check')
        if (userInfo[0].U_EMAIL === 'admin' && userInfo[0].U_PASSWORD === 'datanobase') {
            userInfo[0].admin = true
        }
        res.status(200).send(userInfo[0]);
    } else res.status(401).send();
};

module.exports = { register, login };
