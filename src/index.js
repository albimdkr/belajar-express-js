const express = require('express');

const app = express();
const port = 3000;
const bodyParser = require('body-parser');

app.use(bodyParser.json());
// Route
app.get('/', (req, res) => {
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
