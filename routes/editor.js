var express = require('express');
var router = express.Router();
var fs = require('fs');
var pdf = require('html-pdf');
    var options = { format: 'Letter' };

var mailer = require('../email-templates/mailer');
var params = {
    from: 'my.account@gmail.com',
    to: 'magpresskh@gmail.com',
    subject: 'Заказ визитки с сайта'
};


/* GET users listing. */
router.get('/', function(req, res, next) {
    res.render('editor', {});
});

router.post('/email', function (req, res, next) {
    params.html = "<p><strong>Имя: </strong>"+req.body.name+ "</p><br>"+"<p><strong>Телефон: </strong>"+req.body.phone+ "</p><br>"+"<p><strong>E-mail: </strong>"+req.body.email+ "</p><br>"+"<p><strong>Комментарии: </strong>" + req.body.comment + "</p><br>";
    var side1 = req.body.side1.substring(0, req.body.side1.length-7)+" <style>svg{border: 2px solid black}</style></svg>";
    var side2 = req.body.side2.substring(0, req.body.side2.length-7)+" <style>svg{border: 2px solid black}</style></svg>";
    pdf.create(side1, options).toFile('./files/businesscard1.pdf', function(err, res) {
        if (err) return console.log(err);
        pdf.create(side2, options).toFile('./files/businesscard2.pdf', function(err, res) {
            params.attachments = [{
                filename: "Сторона 1.pdf",
                path: "./files/businesscard1.pdf"
            },
            {
                filename: "Сторона 2.pdf",
                path: "./files/businesscard2.pdf"
            }];
            console.log(req.body);
            mailer.sendMail(params);
            console.log(params);
        })
    });
    res.end();
});


module.exports = router;
