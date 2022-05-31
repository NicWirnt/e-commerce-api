import nodemailer from "nodemailer";

export const sendMail = async (emalData) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP,
    port: +process.env.EMAIL_PORT, // ALL DATA FROM .ENV IS STRING, + TO MAKE IT AS AN INTEGER
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: '"My Store" <bartholome.leffler11@ethereal.email>', // sender address
    to: "bartholome.leffler11@ethereal.email", // list of receivers
    subject: "Email Verification ✔", // Subject line
    text: `Hi there, please follow the link to verify your email ${emalData.url}`, // plain text body
    html: `
    <p>Hi ${emalData.fName}</p>
    <br/>
    <br/>
    please follow the links below to verify your email so you can login to your account.
    <br/>
    <br/>
    <a href= " ${emalData.url}"> ${emalData.url}</a>
  
    <br/>
    <br/>
    Kind Regards, <br/>
    My Store
    `, // html body
  });

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};
