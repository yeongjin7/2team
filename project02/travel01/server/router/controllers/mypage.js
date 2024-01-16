const db = require ("../../config/db.js");


// 마이페이지에 
const myPage = async (req, res) => {
    try {
        const conn = await db.getConnection(); // db에 연결
        const raws = await conn.query("SELECT * FROM user"); // 쿼리문 실행
        console.log(raws);
        res.send(raws[0]); // res => 응답으로 send => 보냅니다. (vue에서 보이게)
    } catch (err) {
        console.error(err);
    }
}

const editMyPage = async (req, res) => {
    try{
        var conn = await db.getConnection(); // db에 연결
        var updateUser = req.body.user; // 

        var rows = await conn.query('SELECT * FROM user'); // 나중에 하나로 쓸수있게 바꾸자

        const findUser = rows.find((data) => { // db user데이터에 id를 조회해서 
          return data.id == updateUser.id
        });

        if(findUser){
          var query = 'UPDATE user SET password= ?, email= ?, phone= ?  WHERE userNo=?'; // update 쿼리문
          var values = [ updateUser.password, updateUser.email, updateUser.phone, findUser.userNo ]; // ?에 넣을 value 지정
          var result = await conn.query(query, values); // 쿼리 실행, ?에 values 지정해준게 들어감

          if(result){
            res.send({ success: true });
          }else if(!result){
            res.send({ success: false });
          }
        }
    
    }catch(err){
        console.log(err)
    }
}



module.exports = {
    myPage,
    editMyPage,
}