const Joi = require("joi");
const models = require("../../models");

const SavePaymentInfo = async (req, res) => {
  // Request Body Check
  // const schema = Joi.object().keys({
  //   paymentCode: Joi.number().required(),
  //   // paymentCode: Joi.string().required(),
  //   paymentType: Joi.string().required(),
  //   email: Joi.string().required(),
  //   price: Joi.string().required(),
  //   reserveNumber: Joi.number().required(),
  // });
  // const result = schema.validate(req.body);
  // if (result.error) {
  //   // 403 Forbidden
  //   res.status(403).send({
  //     message: "schema.validate 에러 (savePaymentInfo)",
  //   });
  //   return;
  // }

  const { paymentCode, paymentType, email, price, reserveNumber } = req.body;
  console.log("req", req);
  // 중복 확인
  // const exists = await models.M_PAYMENT.findOne({
  //   where: {
  //     MP_CODE: req.body.paymentCode,
  //   },
  // });
  // if (exists) {
  //   // 이미 존재한다면
  //   res.status(409).send({
  //     message: "중복된 주문번호 입니다!",
  //   }); // conflict
  //   return;
  // }

  await models.M_PAYMENT.create({
    MP_CODE: paymentCode,
    MP_TYPE: paymentType,
    MP_EMAIL: email,
    MP_PRICE: price,
    MP_RESERVE_NUM: reserveNumber,
  });
  res.status(201).send(); // 201 Created
};

module.exports = { SavePaymentInfo };
