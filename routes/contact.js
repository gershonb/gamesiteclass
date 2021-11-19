var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact');
});

router.post('/', function(req, res, next) {
      // Value to be inserted
      let userName = req.body.name;
      let userEmail = req.body.email;
      let userMessage = req.body.message;
      console.log("--" + userName + userEmail + userMessage);  

      var transporter = nodemailer.createTransport({
        service: 'gmail',
        auth: {
          user: 'justformanchurian@gmail.com',
          pass: 'Gershon,614'
        }
      });

      var mailOptions = {
        from: 'justformanchurian@gmail.com',
        to: 'justformanchurian@gmail.com',
        subject: 'Sending Email from gameWeb',
        text: `${userName}
               ${userEmail}
               ${userMessage}`
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });

      res.render('contact');
});

module.exports = router;