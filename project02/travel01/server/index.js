const express = require ('express');
const cors = require('cors');
const router = require('./router/router.js');
const path = require('path');
var cookieParser = require('cookie-parser');

const app = express();

app.use(cors({
  origin: 'http://localhost:8080',
  credentials: true, // 쿠키 사용 허용
}));
app.use(express.json()); // json으로 데이터 교환 가능
app.use(cookieParser()); // 쿠키를 암호화
app.use(router);

// app.use( '/', express.static(path.join(__dirname, '/dist'))); // 이 부분이 없으면 router에서 index.html을 로드하지 못한다.
// app.get('/', (req, res)=>{
//   res.sendFile(path.join(__dirname, '/dist/index.html'));  
// })

// lacalhost:5005로 포트 설정
app.listen(5005, function() {
    console.log('listening on 5005')
})

// 새로고침시 오류나는거 해결 코드, 맨 밑에 위치 해야되는듯?
router.get('/*', function(req, res) {
  res.sendFile(path.join(__dirname, '/dist/index.html'), function(err) {
    if (err) {
      res.status(500).send(err)
    }
  })
})

