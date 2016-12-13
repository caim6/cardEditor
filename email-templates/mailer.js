var Q = require('q');
var nodemailer = require('nodemailer');
var emailTemplates = require('email-templates');
var smtpTransport = require('nodemailer-smtp-transport');
var transport = nodemailer.createTransport(
    smtpTransport({
        service: 'gmail',
        auth: {
            user: 'vxcb234@gmail.com',
            pass: 'Qwerty098765'
        },
        secure: true,
        tls: {
        rejectUnauthorized: false
        }
    })
);
module.exports={
     sendMail: function(params){transport.sendMail(params, function (err, res) {
        if (err) {
            console.error(err);
        }
    })}
};