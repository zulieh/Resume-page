const nodemailer = require('nodemailer');
require('dotenv').config({ path: './config/config.env' });



module.exports = async (mail, subject, message, html) => {
  const transport = nodemailer.createTransport({
    host: process.env.MAIL_HOST,
    port: process.env.MAIL_PORT,
    auth: {
      user: process.env.SMTP_USERNAME,
      pass: process.env.SMTP_PASSWORD,
    },
  });

  const mailOptions = {
    from: " 'zuleiha' <tzuleiha@gmail.com>",
    to: "zuleiha_tijani@yahoo.com",
    subject,
    message,
    html,
  };

  return transport.sendMail(mailOptions);
};
