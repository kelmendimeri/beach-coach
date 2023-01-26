const express = require("express");
const router = require("express").Router();
const nodemailer = require("nodemailer");
const connectToDb = require('../Config');
const path = require("path");

const frontendFile = path.join(__dirname, '../', 'client', 'build');

router.use(express.static(frontendFile));

router.post("/send-form", async (req, res) => {
    const body = req.body;
    const transport = await nodemailer.createTransport({
        // pool: true,
        host: "mail.beachcoach.app",
        port: 465,
        auth: {
            user: "louise.kelly@beachcoach.app",
            pass: "Tuesday123!"
        }
    });

    const message = {
        from: "louise.kelly@beachcoach.app",
        to: "louise.kelly@beachcoach.app",
        subject: `${body.fullName} - Contact Form`,
        text: `Fullname: ${body.fullName}\n Email: ${body.email}\n PhoneNumber: ${body.phoneNumber}\n Msg: ${body.message}`,
        html: `<p>Fullname: ${body.fullName}<br/> Email: ${body.email}<br/> PhoneNumber: ${body.phoneNumber}<br/> Msg: ${body.message}</p>`
    };

    await transport.sendMail(message, (err) => {
        if (err) {
            return res.status(200).json("Mail was not sent!");
        }
        return res.status(200).json("Mail send successfully wait for our response.");
    })

})

router.post("/waiting-list",async (req, res) => {
    const value = req.body.email;
    let sql = `INSERT INTO waitinglist (email) VALUES ('${value}')`;

    connectToDb().then(con => {
        con.connect(function (err) {
            if (err) console.log(err);
            con.query(sql, function (err) {
                if (err) {
                    console.log(err);
                }
                con.end();

                return res.status(200).json({message: "You will be contated soon for the app.", result: true});
            })
        })
    });
});

router.get('*', (req, res) => {
    res.sendFile(path.join(__dirname, '../../', 'client', 'build', 'index.html'));
});

module.exports = router;