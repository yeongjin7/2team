const db = require ("../../config/db.js");
// 마이페이지에 

const member = async (req, res) => {
    try{
      console.log("1");
        var conn = await db.getConnection(); // db에 연결
        console.log("2");
        var memberData = req.body.member; // 
        console.log("3");
        var query = 'INSERT INTO user (name, id, password, email, phone, joinDay) VALUE (?, ?, ?, ?, ?, "2024-01-16")';
        console.log("4");
        var values = [memberData.name, memberData.id, memberData.password, memberData.email, memberData.phone]; // ?에 넣을 value 지정
        console.log("5");
        var result = await conn.query(query, values);
        console.log("6");

        if(result){
          console.log("7");
          res.send({ success: true });
          console.log("8");
          }
    }catch(err){
        console.log(err)
    }
}



module.exports = {
    member
}