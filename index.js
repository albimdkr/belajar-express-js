const express = require('express');
const app = express();
const port = 3000;


//Route
app.get('/', (req, res) => {
    res.send('Utama');
});

app.get('/Hello', (req, res) => {
    res.send('Sipp, express telah terinstall!');
});

app.listen(port, () => {
    console.log(`Running on port ${port}`)
});