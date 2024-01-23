const db = require ("../../config/db.js");

const searchPw = async (req, res) => {
    try{
      //아무거나 지정해준 con 상수로 db를 연결함
      const con = await db.getConnection();
      //memberData? userData? 클라이언트가 작성한 id를 어떻게 가져오지?
      const userData = req.body.searchPw;
      console.log(userData);
      //joongbok으로 DB에서 user테이블에 있는 id가 꺼내와지나?
      var searchpassword = await con.query("SELECT id, password, phone, email FROM user");
      //id가 배열로 되어있으니 그 안에 있는 data를 찾기 위해 find를 쓰는 듯함. 
      //id가 자동으로 배열로 되어지나?
      console.log(searchpassword);
      const findPw = searchpassword.find((data) => { // searchpassword와 로그인id, pw에 같은게 있는지 찾기위해 find 사용
        //DB에서 꺼내온 id와 클라이언트가 작성한 id를 어떻게 비교하지?
        return data.id == userData.id && data.phone == userData.phone && data.email == userData.email; // 같지 않으면 true를 리턴, 아니면 false
      })
      console.log(findPw)
  
      if(findPw){
        
        res.send({ success:true, pass: findPw.password});
      
      }else{
        res.send({ success:false });
      }
    }catch(err){
        console.log(err)
    }
   }

   const searchId = async (req, res) => {
    try{
      //아무거나 지정해준 con 상수로 db를 연결함
      const con = await db.getConnection();
      //memberData? userData? 클라이언트가 작성한 id를 어떻게 가져오지?
      const userData = req.body.searchId;
      //joongbok으로 DB에서 user테이블에 있는 id가 꺼내와지나?
      var searchpwdata = await con.query("SELECT phone, email FROM user");
      //id가 배열로 되어있으니 그 안에 있는 data를 찾기 위해 find를 쓰는 듯함. 
      //id가 자동으로 배열로 되어지나?
      const findpw = searchpwdata.find((data) => { // raws와 로그인id, pw에 같은게 있는지 찾기위해 find 사용
        //DB에서 꺼내온 id와 클라이언트가 작성한 id를 어떻게 비교하지?
        return data.phone == userData.phone && data.email == userData.email; // 같지 않으면 true를 리턴, 아니면 false
      })
      console.log(findpw);
  
      //DB와 클라이언트가 입력한 아이디가 같지 않아야 사용 가능한 ID이기 때문에 findID가 달라야 success가 true
      if(findpw){
        res.send({ success:true });
      }else{
        res.send({ success:false });
      }
    }catch(err){
        console.log(err)
    }
   }
  
  
  module.exports = {
      searchPw, searchId
  }