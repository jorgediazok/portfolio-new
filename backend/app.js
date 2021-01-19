require('dotenv').config();
const express = require('express');
const router = express.Router();
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
const path = require('path');

//Check
const app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//CREDENTIALS
const userCredentials = process.env.USER_CREDENTIALS;
const passCredentials = process.env.USER_PASSWORD;
const userGet = process.env.USER_MAIL;

//const publicPath = path.join(__dirname, '..', 'public');
//app.use(express.static(publicPath));

//Check
app.use(express.static('client/build/'));
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'client', 'build', 'index.html'));
});

//Route for form
router.post('/api/form', async (req, res) => {
  let data = req.body;

  let smtpTransport = await nodemailer.createTransport({
    service: 'gmail',
    host: 'smtp.gmail.com',
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: userCredentials,
      pass: passCredentials,
    },
    tls: {
      rejectUnauthorized: false,
    },
  });
  let mailOptions = {
    from: data.email,
    to: userGet,
    subject: `Message from ${data.name}`,
    html: `
    <h3>Information</h3>
    <ul>
    <li>Name: ${data.name}</li> 
    <li>Email: ${data.email}</li> 
    <li>Country: ${data.country}</li>
    </ul>
    <h3>Message</h3>
    <p>${data.textarea}</p>
    `,
  };

  await smtpTransport.sendMail(mailOptions, (error, response) => {
    if (error) {
      res.send(error);
    } else {
      res.send('success');
      res.render('contact', { msg: 'Email has been sent' });
    }
  });
  smtpTransport.close();
});

//Listening in Port

app.use('/api/form', router);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
