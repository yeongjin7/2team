const db = require ("../../config/db.js");

const boardData = async (req, res) => {
    try {
        const boardNo = req.params.boardNo;
        const conn = await db.getConnection(); // db에 연결
        const raws = await conn.query("SELECT board.title, board.boardNo, board.boardImg, user.name FROM board JOIN user ON board.userNo = user.userNo ORDER BY board.boardNo ASC;");

        // console.log(query);
        console.log(raws);

        // res.send(query);
        res.send(raws); // res => 응답으로 send => 보냅니다. (vue에서 보이게)

    } catch (err) {
        console.error(err);
    }
    // finally {
    //     if (conn) conn.release(); // 연결 종료 또는 반환
    // }
}

module.exports = {
    boardData,
}