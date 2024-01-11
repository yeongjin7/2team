var mariadb = require('mariadb');

const pool = mariadb.createPool({
    host: '127.0.0.1', 
    port: 3306,
    user: 'root', 
    password: '1234',
    connectionLimit: 5,
    database:"travel"
  });

module.exports = pool;