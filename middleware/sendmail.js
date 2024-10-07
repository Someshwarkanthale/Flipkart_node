const nodemailer = require('nodemailer');
// Set up Nodemailer transporter

let transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'kanthaleomkar0@gmail.com',
        pass: 'yiig gaik dpvp jfsy' // Your email password or app-specific password.
    }
});

// Function to send welcome email.
let sendWelcomeEmail=(user_name, user_email)=>{
    let mailOptions = {
        from: 'kanthaleomkar0@gmail.com',
        to: user_email,
        subject: 'Welcome to Our App!',
        text: `Hello ${user_name},\n\nThank you for joining our platform! We're excited to have you.\n\nBest regards,\nThe Team`
    };

    transporter.sendMail(mailOptions, (error, info) => {
        if (error) {
            return console.log('Error sending email:', error);
        }
        console.log('Email sent:', info.response);
    });
}

module.exports = sendWelcomeEmail;
