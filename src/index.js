/* eslint-disable no-unused-vars */
const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');
const db = require('./connection');

app.use(bodyParser.json());
// Route
app.get('/', (req, res) => {
  // eslint-disable-next-line space-in-parens
  db.query('SELECT * FROM student', ( error, result ) => {
    console.log(result);
  });
  res.send('Utama');
});

app.get('/user', (req, res) => {
  console.log({ urlParam: req.query });
  res.send('Mengambil data');
});

app.post('/login', (req, res) => {
  console.log({ requestFromOutside: req.body });
  res.send('Login berhasil');
});

app.put('/username', (req, res) => {
  console.log({ updateData: req.body });
  res.send('Update berhasil');
});

// Server
app.listen(port, () => {
  console.log(`Running on port ${port}`);
});
