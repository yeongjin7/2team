const express = require("express");
const { myPage, editMyPage, } = require ("./controllers/mypage.js");

const router = express.Router();


router.get('/mypage', myPage);
router.put('/mypage/edituser', editMyPage)

module.exports = router;