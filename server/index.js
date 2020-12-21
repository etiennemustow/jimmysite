const express = require('express');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
const cors = require('cors');
require('dotenv').config()


const app = express();

const port = 4444;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.listen(port, () => {
  console.log('We are live on port 4444');
});


app.get('/', (req, res) => {
  res.send('Welcome to my api');
})

app.post('contact', (req,res) => {
  console.log("YESSSS")
  console.log(process.env.EMAIL + " +++++ " + process.env.PASS)
  console.log("the proxy port is: " + port)
  console.log("The system port is: " + process.env.PORT)
  var data = req.body;

var smtpTransport = nodemailer.createTransport({
  service: 'Gmail',
  port: 465,
  auth: {
    user: process.env.EMAIL,
    pass: process.env.PASS
  }
});

var mailOptions = {
  from: data.email,
  to: process.env.EMAIL,
  subject: 'Submission form',
  html: `<p>Name: ${data.name}</p>
          <p>Email: ${data.email}</p>
          <p>Message: ${data.message}</p>`
};

smtpTransport.sendMail(mailOptions,
(error, res) => {
  if(error) {
    res.send(error)
  }else {
    res.send('Success')
  }
  smtpTransport.close();
});

})
