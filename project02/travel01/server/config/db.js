const mariadb = require('mariadb');

const db = mariadb.createPool({
    host: 'yoo', 
    // port: 3306,
    user: 'root', 
    host: '15.165.118.139', 
    port: 3306,
    user: 'yoo', 
    password: '1234abcd',
    connectionLimit: 30,
    acquireTimeout : 100000,
    database:"travel",
  });



// db 연결 끊어지면 자동 재시작 코드 (필요할때 써보자)

db.on('error', async (err) => {
  console.log('Database error:', err);
  if (err.code === 'PROTOCOL_CONNECTION_LOST') {
      // 데이터베이스 연결이 끊어진 경우 자동 재연결 시도
      console.log('Attempting to reconnect to the database...');
      await autoReconnect();
  } else {
      console.error('Unhandled database error:', err);
  }
});

// 실행 예시
autoReconnect();

async function autoReconnect() {
  while (true) {
      try {
          const connection = await db.getConnection();
          console.log('Connected to the database successfully.');
          connection.release();
          break;
      } catch (error) {
          console.error('Failed to reconnect to the database. Retrying...', error);
          await new Promise(resolve => setTimeout(resolve, 30000));
      }
  }
}

  module.exports = db;