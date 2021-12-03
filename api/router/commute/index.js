const commuteFunctions = require("./commuteFunctions.js");
const router = require("express").Router();

//router 요청 받고, axios는 요청 보내는 거
router.post("/In", commuteFunctions.In);
router.post("/Out", commuteFunctions.Out);

module.exports = router;
