var express = require('express');
var router = express.Router();


router.get('/login', (req, res) => {
    res.send('로그인 페이지')
})

router.get('/register', (req, res) => {
    res.send('회원가입 페이지')
})


module.exports = router;

