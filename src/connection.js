// eslint-disable-next-line import/no-extraneous-dependencies, no-unused-vars
const mysql = require('mysql');

// eslint-disable-next-line no-undef
const db = mysql.createConnection({
  host: '127.0.0.1',
  user: 'dul1sm3',
  password: 'albi',
  database: 'db_university',
});

module.exports = db;
