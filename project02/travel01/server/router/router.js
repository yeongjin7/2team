const express = require("express");
const { myPage, editMyPage, logintest, } = require ("./controllers/mypage.js");
const { member } = require ("./controllers/member.js");
const { main } = require ("./controllers/main.js");

const router = express.Router();


router.get('/mypage', myPage);
router.put('/mypage/edituser', editMyPage)
router.post('/member', member)
router.post('/logintest', logintest)
router.get('/main', main);

module.exports = router;