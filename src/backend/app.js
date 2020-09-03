const express = require('express');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const nodemailer = require('nodemailer');

const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cookieParser());

app.post('/api/sendMail', (req, res) => {
  console.log;
});

app.listen(5000, () => {
  console.log('Server listening on port 5000');
});
