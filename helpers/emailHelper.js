import nodemailer from "nodemailer";

const emaillProcessor = async (emailData) => {
  const transporter = nodemailer.createTransport({
    host: process.env.EMAIL_SMTP,
    port: +process.env.EMAIL_PORT, // ALL DATA FROM .ENV IS STRING, + TO MAKE IT AS AN INTEGER
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASSWORD,
    },
  });

  let info = await transporter.sendMail(emailData);

  console.log("Message sent: %s", info.messageId);
  // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

  // Preview only available when sending through an Ethereal account
  console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  // Preview URL: https://ethereal.email/message/WaQKMgKddxQDoou...
};

export const sendMail = async (emalData) => {
  const mailBody = {
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
  };

  emaillProcessor(mailBody);
};

//user info should have email,
export const profileUpdateNotificaiton = async (userInfo) => {
  const mailBody = {
    from: '"My Store" <bartholome.leffler11@ethereal.email>', // sender address
    to: userInfo.email, // list of receivers
    subject: "Profile Update Notification", // Subject line
    text: `Hi there, your profile has just been requested a password update, if it wasn't you please contact administration immidiately`, // plain text body
    html: `
    <p>Hi ${userInfo.fName}</p>
    <br/>
    <br/>
    your profile has just been requested a password update, if it was you please contact administration immidiately
    <br/>
    <br/>
  
    <br/>
    <br/>
    Kind Regards, <br/>
    My Store
    `, // html body
  };

  emaillProcessor(mailBody);
};

export const otpNotificaiton = async (userInfo) => {
  const mailBody = {
    from: '"My Store" <bartholome.leffler11@ethereal.email>', // sender address
    to: userInfo.email, // list of receivers
    subject: "You have received OTP", // Subject line
    text: `Hi there, here is the OTP you requested ${userInfo.token}`, // plain text body
    html: `
    <p>Hi there</p>
    <br/>
    <br/>
    here is the OTP you requested ${userInfo.token} 
    <br/>
    <br/>
  
    <br/>
    <br/>
    Kind Regards, <br/>
    My Store
    `, // html body
  };

  emaillProcessor(mailBody);
};
