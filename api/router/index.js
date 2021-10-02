const router = require('express').Router();

router.get('/', (req, res) => {
    res.send('Hello World');
})

router.get('/reserve/list', (req, res) => {
    res.json({username:'dev group. youngjin'})
});

module.exports = router;