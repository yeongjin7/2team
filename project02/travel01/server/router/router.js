const express = require("express");
const { myPage, editMyPage, logintest, singleQna, boardposts } = require ("./controllers/mypage.js");
const { member, checkUsername } = require ("./controllers/member.js");
const { login } =require("./controllers/login.js");
const { searchPw } = require("./controllers/search.js");
const { searchId } = require("./controllers/search.js");
const { main } = require ("./controllers/main.js");
const { Board } = require ("./controllers/userBoard.js");

const router = express.Router();


router.get('/mypage', myPage);
router.put('/mypage/edituser', editMyPage);
router.post('/member', member);
router.post('/logintest', logintest);
router.post('/checkUsername', checkUsername);
router.post('/login',login),
router.post('/searchPw', searchPw),
router.post('/searchId', searchId)
router.get('/main', main);
router.get('/userBoard', Board);
router.post('/singleqna', singleQna)
router.get('/boardposts', boardposts)

module.exports = router;