const express = require('express');
const app = express();
var pool = require('./db')
const path = require('path');
const cors = require('cors')

app.use(cors());

app.listen(5005, function() {
    console.log('listening on 5005')
})

// 터미널에서 client 들어간 후 npm run build로 빌드 해준 후
// 터미널 server에서 node index.js로 실행
// lacalhost:5005 로 접속

// app.use( '/', express.static(path.join(__dirname, '../client/dist') ));  
// 이 부분이 없으면 아래코드에서 index.html을 로드하지 못한다.
// app.get('/', (req, res)=>{
//     res.sendFile(path.join(__dirname, '../client/dist/index.html'));  
// })
// 기본 경로 '/'을 통해 빌드된 dist/index.html 파일을 로드시킨다.

// app.get('/*', function(req, res) {
//     res.sendFile(path.join(__dirname, '../client/dist/index.html'), function(err) {
//       if (err) {
//         res.status(500).send(err)
//       }
//     })
//   })
// 새로고침 관련

// db랑 연결 되어있는 것 -> 연결 후 mypage.vue에서 get 진행.
app.get("/main_db", async function(req,res){
    try{
        var conn = await pool.getConnection();
        var rows = await conn.query('SELECT * FROM main'); // 쿼리 실행
        console.log(rows);
        res.send(rows)
    }catch(err){
        console.log(err)
    }
})
app.get("/wawa", async function(req,res){
    try{
        var conn = await pool.getConnection();
        var rows = await conn.query('SELECT * FROM user'); // 쿼리 실행
        console.log(rows);
        res.send(rows[0])
    }catch(err){
        console.log(err)
    }
})

