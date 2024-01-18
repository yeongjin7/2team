const db = require ("../../config/db.js");

const Board = async (req, res) => {
    try {
        const conn = await db.getConnection(); // db에 연결
        const raws = await conn.query("SELECT * FROM board"); // 쿼리문 실행
        
        console.log(raws);
        res.send(raws);
 // res => 응답으로 send => 보냅니다. (vue에서 보이게)
    } catch (err) {
        console.error(err);
    }
    // finally {
    //     if (conn) conn.release(); // 연결 종료 또는 반환
    // }
}

module.exports = {
    Board
}