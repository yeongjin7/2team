const db = require ("../../config/db.js");

<<<<<<< HEAD
const asd = async (req, res) => {
    try{
        const boardNo = req.params.boardNo;
        const conn = await db.getConnection(); // db에 연결
        const query ="SELECT * FROM board";
        const raws2 = await conn.query(query, [boardNo]);

        res.send(raws2); // res => 응답으로 send => 보냅니다. (vue에서 보이게)

=======
const boardDetail = async (req, res) => {
    try {
        const conn = await db.getConnection(); // db에 연결
        const raws = await conn.query("SELECT * FROM board"); // 쿼리문 실행
        console.log(raws);
        res.send(raws);
        // res => 응답으로 send => 보냅니다. (vue에서 보이게)
>>>>>>> 58dbf9f2563bb611dd338a5c5780937310b93f1f
    } catch (err) {
        console.error(err);
    }
}
<<<<<<< HEAD

module.exports = {
    asd,
=======
module.exports = {
    boardDetail
>>>>>>> 58dbf9f2563bb611dd338a5c5780937310b93f1f
}