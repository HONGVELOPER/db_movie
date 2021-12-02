const Joi = require("joi");
const models = require("../../models");

const In = async (req, res) => {
  console.log("In REQ:", req);
  const { userName, inTime } = req.body;

  // 중복 확인
  // const exists = await models.M_PAYMENT.findOne({
  //   where: {
  //     MP_CODE: req.body.paymentCode,
  //   },
  // });outTime
  // if (exists) {
  //   // 이미 존재한다면
  //   res.status(409).send({
  //     message: "중복된 주문번호 입니다!",
  //   }); // conflict
  //   return;
  // }

  await models.UC_COMMUTE.create({
    UC_NAME: userName,
    UC_IN: inTime,
    // UC_OUT,
  });
  res.status(201).send(); // 201 Created
};

const Out = async (req, res) => {
  console.log("Out REQ:", req);
  const { userName, outTime } = req.body;

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

  await models.UC_COMMUTE.create({
    UC_NAME: userName,
    // UC_IN: inTime,
    UC_OUT: outTime,
  });
  res.status(201).send(); // 201 Created
};

module.exports = { In, Out };
