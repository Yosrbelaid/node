
const email=require('nodemailer')

var nodemailer = require('nodemailer');

var transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'belaidyosr4@gmail.com',
    pass: ''
  }
});

var mailOptions = {
  from: 'belaidyosr4@gmail.com',
  to: 'belaidyosr4@gmail.com',
  subject: 'Sending Email using Node.js',
  text: 'That was easy!'
};

transporter.sendMail(mailOptions, function(error, info){
  if (error) {
    console.log(error);
  } else {
    console.log('Email sent: ' + info.response);
  }
});


