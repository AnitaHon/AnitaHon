
/*---------------------------------------------- 1 -----------------------------------------------*/
import Glide from '@glidejs/glide';
import anime from 'animejs';

new Glide('.glide').mount();

document.addEventListener('DOMContentLoaded', () => {
    new Glide('.glide').mount();
});

/*----------------------------------------------  -----------------------------------------------*/

const express = require('express');
const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Create a transporter for Nodemailer
const transporter = nodemailer.createTransport({
    service: 'gmail', // Use your email service
    auth: {
        user: 'anitahonck1015@gmail.com', // Your email
        pass: 'weqeqw' // Your email password or app password
    }
});

app.post('/submit', (req, res) => {
    const { name, email, message } = req.body;

    const mailOptions = {
        from: email, // Sender's email
        to: 'anitahonck1015@gmail.com', // Your email to receive messages
        subject: `Contact Form Submission from ${name}`,
        text: message
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ success: false, message: 'Failed to send message.' });
        }
        res.json({ success: true, message: 'Message sent successfully!' });
    });
});

app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});