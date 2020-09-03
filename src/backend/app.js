require('dotenv').config();
const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');

//Check
const app = express();

//Body parser
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

//CREDENTIALS
const userCredentials = process.env.USER_CREDENTIALS;
const passCredentials = process.env.USER_PASSWORD;

//Check
app.get('/', (req, res) => {
  res.send('Hello');
});

app.post('/api/form', async (req, res) => {
  let data = req.body;
  console.log(data);

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
    to: 'jorgediazok@gmail.com',
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

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`);
});
