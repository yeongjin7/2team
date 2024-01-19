const { json } = require("express");
const db = require ("../../config/db.js");


// 마이페이지에 
const myPage = async (req, res) => {
    try {
      var cookieData = req.cookies.loginCookie; // 클라이언트가 보낸 cookie를 받음
      console.log("쿠키 값: ",cookieData);
        var conn = await db.getConnection(); // db에 연결
        const raws = await conn.query("SELECT * FROM user"); // 쿼리문 실행

        const findUser = raws.find((data) => {
          return data.userNo == cookieData;
        });
        console.log(findUser);
        if(findUser){
          res.send(findUser); // res => 응답으로, send => 보냅니다. (vue에서 보이게)
      }
    } catch (err) {
        console.error(err);
    }
}

const editMyPage = async (req, res) => {
    try{
        var conn = await db.getConnection(); // db에 연결
        var updateUser = req.body.user; // vue페이지에서 보낸 데이터를 받음, vue에서 post로 보낸 데이터는 req.body."지정한이름"에 들어감

        var rows = await conn.query('SELECT * FROM user'); // 쿼리문 실행 후 결과가 rows에 들어감

        const findUser = rows.find((data) => { // rows에서 찾을건데, data가 rows랑 같음
          return data.id == updateUser.id // updateUser는 위에서 받아온 데이터
        });

        if(findUser){
          var query = 'UPDATE user SET password= ?, email= ?, phone= ?  WHERE userNo=?'; // update 쿼리문을 변수에 지정
          var values = [ updateUser.password, updateUser.email, updateUser.phone, findUser.userNo ]; // 쿼리문 ?에 넣을 value 지정
          var result = await conn.query(query, values); // 쿼리 실행, ?에 values 지정해준게 들어감

          if(result){
            res.send({ success: true }); // vue에서 성공여부로 알림창을 나오게 하기 위해서 true를 보냅니다.
          }else if(!result){
            res.send({ success: false });
          }
        }
    
    }catch(err){
        console.log(err)
    }
}

const singleQna = async (req, res) => {
  try {
    const conn = await db.getConnection();
    var cookieData = req.cookies.loginCookie;
    const clientQna = req.body.qna;
    const query = await conn.query('INSERT INTO singleqna (userNo, sqTitle, sqContent) VALUE (?, ?, ?)', [cookieData, clientQna.sqTitle, clientQna.sqContent]);

    if(query){
      console.log(7);
      res.send({ success: true });
    }


  } catch (error) {
    console.log(error);
  }
}

const boardposts = async (req, res) => {
  try {
    const conn = await db.getConnection();
    var cookieData = req.cookies.loginCookie;
    const raws = await conn.query("SELECT * FROM board");

    const value = raws.filter((data) => {
      return data.userNo == cookieData;
    })

    if(value){
      console.log("결과", value);
    }

  } catch (error) {
    
  }
}

const logintest = async (req, res) => {
  try {
      const conn = await db.getConnection(); // db에 연결
      const loginData = req.body.login; // 로그인시 입력한 id, pw를 클라이언트가 줬고, 그걸 받아옴
      console.log(loginData);
      const raws = await conn.query("SELECT * FROM user"); // 쿼리문 실행
      console.log(raws);
      const findLogin = raws.find((data) => { // raws와 로그인id, pw에 같은게 있는지 찾기위해 finde사용
        return data.id == loginData.id && data.password == loginData.password; // 같으면 true를 리턴, 아니면 false
      })
      console.log(findLogin);
      if(findLogin){
        res.cookie( "userNo", findLogin.userNo, {  // 클라이언트에 쿠키를 전송
          path: '/',
          httpOnly: true, // 통신할때만 접속할 수 있다. 기본값은 false임 
         });
        // res.cookie(key,value,{options});
        res.send({ success: true }); // vue에서 성공여부로 알림창을 나오게 하기 위해서 true를 보냅니다.
      }else if(!findLogin){
        console.log("문제가 생김");
        res.send({ success: false });
      }

  } catch (err) {
      console.error(err);
  }
}

module.exports = {
    myPage,
    editMyPage,
    logintest,
    singleQna,
    boardposts,
}