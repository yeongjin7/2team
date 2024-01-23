const express = require("express");
const { myPage, editMyPage, logintest, singleQna, boardposts, getQnaList } = require ("./controllers/mypage.js");
const { member, checkUsername } = require ("./controllers/member.js");
const { login, cookiefind, cookiefin } =require("./controllers/login.js");
const { searchPw } = require("./controllers/search.js");
const { searchId } = require("./controllers/search.js");
const { main } = require ("./controllers/main.js");
<<<<<<< HEAD
const { boardData } = require ("./controllers/userBoard.js");
const { saveSqAnswer } = require ("./controllers/admin.js");
=======
const { Board } = require ("./controllers/userBoard.js");
const { boardDetail } = require ("./controllers/boardDetail.js");
const { saveSqAnswer, getUserList, userDelete, getqnalistadmin } = require ("./controllers/admin.js");
>>>>>>> 58dbf9f2563bb611dd338a5c5780937310b93f1f
const {KaKaoMap, KaKaoMap2, } = require ("./controllers/KaKaoMap.js");
const { asd } = require ("./controllers/boardDetail.js");



const router = express.Router();


router.get('/mypage', myPage);
router.put('/mypage/edituser', editMyPage);
router.post('/member', member);
router.post('/logintest', logintest);
router.post('/checkUsername', checkUsername);
router.post('/login',login),
router.post('/searchPw', searchPw),
router.post('/searchId', searchId);
router.get('/main', main);
<<<<<<< HEAD
router.get('/userBoard', boardData);
router.get('/boardDetails', asd);
=======
router.get('/userBoard', Board);
router.post('/boardDetail',boardDetail );

router.post('/singleqna', singleQna);
router.get('/boardposts', boardposts);

>>>>>>> 58dbf9f2563bb611dd338a5c5780937310b93f1f

router.post('/singleqna', singleQna);
router.get('/boardposts', boardposts);
router.get('/getqnalist', getQnaList);
router.put('/qnaanswer', saveSqAnswer);

router.get('/KaKaoMap', KaKaoMap);
router.get('/KaKaoMap/other', KaKaoMap2);

router.get('/cookieFind', cookiefind)
router.get('/cookieFin', cookiefin)

router.get('/userlist', getUserList);
router.delete('/user/:userId', userDelete);
router.post('/getqnalistadmin', getqnalistadmin);

module.exports = router;