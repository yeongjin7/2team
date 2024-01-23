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

const getUserList = async (req, res) => {
    try {
        var conn = await db.getConnection(); // db에 연결
        const raws = await conn.query("SELECT * FROM user"); // 쿼리문 실행

        if(raws){
          res.send(raws); // res => 응답으로, send => 보냅니다. (vue에서 보이게)
      }
    } catch (err) {
        console.error(err);
    }
}

const userDelete = async (req, res) => {
    try {
        var conn = await db.getConnection();
        const userId = req.params.userId;
        const query = "UPDATE user SET name = '탈퇴', id = '탈퇴', password = '탈퇴', email = '탈퇴', phone = '탈퇴' WHERE userNo = ?;";
        const result = conn.query(query, userId);
        if(result){
            res.send({ success: true });
        }

    } catch (error) {
        console.error(err);
    }
}

const getqnalistadmin = async (req, res) => {
    try {
        var conn = await db.getConnection();
        const raws = await conn.query("SELECT singleqna.*, user.id FROM singleqna JOIN user ON singleqna.userNo = user.userNo");
        console.log('어드민 문의', raws)
        raws.forEach(item => {
            const stringDate = item.sqDate;
            const dateObject = new Date(stringDate);
            const formattedDate = `${dateObject.getFullYear()}-${(dateObject.getMonth() + 1).toString().padStart(2, '0')}-${dateObject.getDate().toString().padStart(2, '0')} ${dateObject.getHours().toString().padStart(2, '0')}:${dateObject.getMinutes().toString().padStart(2, '0')}`;
            item.sqDate = formattedDate;
            console.log("2", formattedDate);
        });
        res.send(raws);
    } catch (err) {
        console.err(err);
    }
}

module.exports = {
    saveSqAnswer,
    getUserList,
    userDelete,
    getqnalistadmin,
}