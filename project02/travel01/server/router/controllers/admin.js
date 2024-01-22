const db = require ("../../config/db.js");

const saveSqAnswer = async (req, res) => {
    try {
        var conn = await db.getConnection(); // db에 연결
        console.log("그래요");
        const getdata = req.body.qna;
        console.log(getdata);
        const raws = "UPDATE singleqna SET sqAnswer=? WHERE sqNo=?"; // 쿼리문 실행
        const values = [ getdata.sqAnswer, getdata.sqNo];
        const query = await conn.query(raws, values);
        // res.send(raws);

    } catch (error) {
        
    }
}

module.exports = {
    saveSqAnswer,
}