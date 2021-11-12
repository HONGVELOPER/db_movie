const router = require("express").Router();
const userFunctions = require("./userFunction.js");

// router.post('/list', aync(req, res) => {
//     console.log('here');
//     const userInfo = await userFunctions.getUser();
//     console.log(userInfo, 'index user info');
//     res.json({userOnfo: userInfo});
// });

router.post("/test", async (req, res) => {
    console.log(req.body, "check!");
    res.status(200).send();
});

module.exports = router;
