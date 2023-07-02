/* eslint-disable prefer-destructuring */
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

// GET
// student
app.get('/student', (req, res) => {
  const sql = 'SELECT * FROM student';
  // eslint-disable-next-line space-in-parens
  db.query(sql, ( error, result ) => {
    // eslint-disable-next-line no-undef
    if (error) throw error;
    response(200, result, 'Success', res);
  });
});

app.get('/student/search', (req, res) => {
  const id = req.query.id;
  const sql = `SELECT name, faculty, email FROM student WHERE id = ${id}`;
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
    // console.log(result);
    response(200, result, 'Success Search Lecture', res);
  });
});

// POST
// adding data
app.post('/student', (req, res) => {
  const {
    id,
    name,
    email,
    address,
    faculty,
  } = req.body;
  const sql = `INSERT INTO student (id, name, email, address, faculty) 
               VALUES (${id}, '${name}', '${email}', '${address}', '${faculty}')`;
  db.query(sql, (error, result) => {
    if (error) response(400, 'Invalid', 'Error', res);
    // console.log({ f: result.affectedows });
    const data = {
      isSuccess: result.affectedRows,
      id: result.insertId,
    };
    if (result?.affectedRows) {
      response(200, data, 'Data added success', res);
    }
  });
});

// PUT
// Edit data
app.put('/student', (req, res) => {
  const {
    id,
    name,
    email,
    address,
    faculty,
  } = req.body;
  const sql = `UPDATE student SET name = '${name}', email = '${email}', address = '${address}', faculty = '${faculty}' WHERE id = ${id}`;
  db.query(sql, (error, result) => {
    if (error) response(400, 'Fail', 'error', res);
    if (result?.affectedRows) {
      const data = {
        isSuccess: result.affectedRows,
        id: result.insertId,
      };
      response(200, data, 'Update Data Success', res);
    }
  });
});

// DELETE
// Delete data

// Server
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
