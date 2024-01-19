const express = require("express");
const { myPage, editMyPage, logintest, } = require ("./controllers/mypage.js");
const { member, checkUsername } = require ("./controllers/member.js");
const { login } =require("./controllers/login.js");
const { searchPw, searchId } = require("./controllers/search.js")

const router = express.Router();


router.get('/mypage', myPage);
router.put('/mypage/edituser', editMyPage)
router.post('/member', member)
router.post('/logintest', logintest)
router.post('/checkUsername', checkUsername)
router.post('/login',login),
router.post('/searchPw', searchPw),
router.post('/searchId', searchId)


module.exports = router;