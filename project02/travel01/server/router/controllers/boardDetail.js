const db = require ("../../config/db.js");

const asd = async (req, res) => {
    try{
        const boardNo = req.params.boardNo;
        const conn = await db.getConnection(); // db에 연결
        const query ="SELECT * FROM board";
        const raws2 = await conn.query(query, [boardNo]);

        res.send(raws2); // res => 응답으로 send => 보냅니다. (vue에서 보이게)

    } catch (err) {
        console.error(err);
    }
}

module.exports = {
    asd,
}