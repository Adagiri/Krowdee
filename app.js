const express = require('express');
const app = express();
const PORT = 4000;

app.get('/', function (req, res) {
  res.send('Hello people');
});

app.get('/cloudhacks', function (req, res) {
  const path = __dirname + '/files/cloudhacks.pdf';
  res.sendFile(path);
});

app.listen(PORT, () => console.log('APP RUNNING ON PORT: ', PORT));
