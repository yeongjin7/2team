const db = require ("../../config/db.js");
// 마이페이지에 

const member = async (req, res) => {
    try{
        var conn = await db.getConnection(); // db에 연결
        var memberData = req.body.member; // 
        var query = 'INSERT INTO user (name, id, password, email, phone) VALUE (?, ?, ?, ?, ?)';
        var values = [memberData.name, memberData.id, memberData.password, memberData.email, memberData.phone]; // ?에 넣을 value 지정
        var result = await conn.query(query, values);

        if(result){
          res.send({ success: true });
          }
    }catch(err){
        console.log(err)
    }
}

//
 const checkUsername = async (req, res) => {
  try{
    //아무거나 지정해준 con 상수로 db를 연결함
    const con = await db.getConnection();
    //memberData? userData? 클라이언트가 작성한 id를 어떻게 가져오지?
    const userData = req.body.member;
    //joongbok으로 DB에서 user테이블에 있는 id가 꺼내와지나?
    var joongbok = await con.query("SELECT id FROM user");
    //id가 배열로 되어있으니 그 안에 있는 data를 찾기 위해 find를 쓰는 듯함. 
    //id가 자동으로 배열로 되어지나?
    const findId = joongbok.find((data) => { // raws와 로그인id, pw에 같은게 있는지 찾기위해 find 사용
      //DB에서 꺼내온 id와 클라이언트가 작성한 id를 어떻게 비교하지?
      return data.id == userData; // 같지 않으면 true를 리턴, 아니면 false
    })
    console.log(findId);

    //DB와 클라이언트가 입력한 아이디가 같지 않아야 사용 가능한 ID이기 때문에 findID가 달라야 success가 true
    if(!findId){
      res.send({ success:true });
    }else{
      res.send({ success:false });
    }
  }catch(err){
      console.log(err)
  }
 }


module.exports = {
    member, checkUsername
}