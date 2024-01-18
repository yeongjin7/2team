const express = require("express");
const { myPage, editMyPage, logintest, } = require ("./controllers/mypage.js");
const { member, checkUsername } = require ("./controllers/member.js");


const router = express.Router();


router.get('/mypage', myPage);
router.put('/mypage/edituser', editMyPage)
router.post('/member', member)
router.post('/logintest', logintest)
router.post('/checkUsername', checkUsername)
module.exports = router;