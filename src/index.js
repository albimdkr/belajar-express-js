/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./connection');
const response = require('./response');

app.use(bodyParser.json());
// Route
app.get('/', (req, res) => {
  res.send('Dashboard');
});

// student
app.get('/student', (req, res) => {
  const sql = 'SELECT * FROM student';
  // eslint-disable-next-line space-in-parens
  db.query(sql, ( error, result ) => {
    // eslint-disable-next-line no-undef
    response(200, result, 'Success', res);
  });
});

app.get('/student/search', (req, res) => {
  const sql = `SELECT name, faculty, email FROM student WHERE id = ${req.query.id}`;
  db.query(sql, (error, result) => {
    response(200, result, 'Success Search Student', res);
  });
});

// lecture
app.get('/lecture', (req, res) => {
  const sql = 'SELECT * FROM lecture';
  // eslint-disable-next-line space-in-parens
  db.query(sql, ( error, result ) => {
    // eslint-disable-next-line no-undef
    response(200, result, 'Success', res);
  });
});

app.get('/lecture/search', (req, res) => {
  const sql = `SELECT name, subject, email FROM lecture WHERE id = ${req.query.id}`;
  db.query(sql, (error, result) => {
    response(200, result, 'Success Search Lecture', res);
  });
});

app.post('/login', (req, res) => {
  console.log({ requestFromOutside: req.body });
  res.send('Login berhasil');
});

// app.put('/username', (req, res) => {
//   console.log({ updateData: req.body });
//   res.send('Update berhasil');
// });

// Server
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
