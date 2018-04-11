let nodemailer = require('nodemailer');

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'ssss@gmail.com',
        pass: ''
    }
});

let mailOptions = {
    from: 'sss@gmail.com',
    to: 'ss@gmail.com',
    subject: 'test send email',
    text: 'that was easy'
}

transporter.sendMail(mailOptions,function(err,info){
    if (err)
        throw err;
    console.log('email sent: '+info.response);
})