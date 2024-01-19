const db = require ("../../config/db.js");

const login = async (req, res) => {
    try{
      //아무거나 지정해준 con 상수로 db를 연결함
      const con = await db.getConnection();
      //memberData? userData? 클라이언트가 작성한 id를 어떻게 가져오지?
      const userData = req.body.login;
      console.log(userData);
      //joongbok으로 DB에서 user테이블에 있는 id가 꺼내와지나?
      var checklogin = await con.query("SELECT * FROM user");
      console.log(checklogin);
      //id가 배열로 되어있으니 그 안에 있는 data를 찾기 위해 find를 쓰는 듯함. 
      //id가 자동으로 배열로 되어지나?
      const findId = checklogin.find((data) => { // raws와 로그인id, pw에 같은게 있는지 찾기위해 find 사용
        //DB에서 꺼내온 id와 클라이언트가 작성한 id를 어떻게 비교하지?
        return data.id == userData.id && data.password == userData.password; // 같지 않으면 true를 리턴, 아니면 false
      })
      console.log(findId);

      //DB와 클라이언트가 입력한 아이디가 같지 않아야 사용 가능한 ID이기 때문에 findID가 달라야 success가 true
      if(findId){
        res.cookie( "loginCookie", findId.userNo, {  // 클라이언트에 쿠키를 전송
          path: '/',
          httpOnly: true, // 통신할때만 접속할 수 있다. 기본값은 false임 
         });
        res.send({ success:true });
      }else{
        res.send({ success:false });
      }
    }catch(err){
        console.log(err)
    }
   }
  
  
  module.exports = {
      login
  }