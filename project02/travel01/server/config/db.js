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
    database:"travel",
  });
  

  module.exports = db;