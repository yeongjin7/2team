const express = require("express");
const { myPage, editMyPage, logintest, } = require ("./controllers/mypage.js");
<<<<<<< HEAD
const { member, checkUsername } = require ("./controllers/member.js");

=======
const { member } = require ("./controllers/member.js");
const { main } = require ("./controllers/main.js");
>>>>>>> 79825ddd6ee8b9c049ee934fc581cf7a3ac0a628

const router = express.Router();


router.get('/mypage', myPage);
router.put('/mypage/edituser', editMyPage)
router.post('/member', member)
router.post('/logintest', logintest)
<<<<<<< HEAD
router.post('/checkUsername', checkUsername)
=======
router.get('/main', main);

>>>>>>> 79825ddd6ee8b9c049ee934fc581cf7a3ac0a628
module.exports = router;