//import * as authCtrl from "./auth_ctrl.js";
const authCtrl = require("./auth_ctrl.js");
const router = require("express").Router();

//router 요청 받고, axios는 요청 보내는 거
router.post("/register", authCtrl.register);
router.post("/login", authCtrl.login);

module.exports = router;
