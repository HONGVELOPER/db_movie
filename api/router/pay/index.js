const paymentFunctions = require("./paymentFunctions.js");
const router = require("express").Router();

//router 요청 받고, axios는 요청 보내는 거
router.post("/savePaymentInfo", paymentFunctions.SavePaymentInfo);
// router.post("/login", paymentFunctions.login);

module.exports = router;
