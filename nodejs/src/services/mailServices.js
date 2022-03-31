import nodemailer from "nodemailer";
import db from "../models/index";

let sendMailSV = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await db.Contact.create({
        emailCT: data.email,
        nameCT: data.name,
        message: data.text,
      });
      await sendEmail({
        Regmail: data.email,
        Rename: data.name,
        Retext: data.text,
      });
      resolve({ data, err: "OK" });
    } catch (e) {
      reject(e);
    }
  });
};

let sendNewLetter = (data) => {
  return new Promise(async (resolve, reject) => {
    try {
      await sendEmail({
        Regmail: data.email,
        Rename: data.name,
        Retext: data.text,
      });
      resolve({ data, err: "OK" });
    } catch (e) {
      reject(e);
    }
  });
};

let sendEmail = async (dataSend) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: '"hieu pham "<pvanhieu2801@gmail.com>', // sender address
    to: dataSend.Regmail, // list of receivers
    subject: `Thư phản hồi cho người dùng `, // Subject line
    html: `Chào bạn ${dataSend.Rename} cảm ơn bạn đã nhắn cho chúng tôi : ${dataSend.Retext} `, // Subject line
  });
};
let sendNewLetterSV = async (InputEmail) => {
  let transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.EMAIL_APP_USER,
      pass: process.env.EMAIL_APP_PASSWORD,
    },
  });

  let info = await transporter.sendMail({
    from: '"hieu pham "<pvanhieu2801@gmail.com>', // sender address
    to: InputEmail, // list of receivers
    subject: `Thư phản hồi cho người dùng `, // Subject line
    attachments: [
      {
        filename: "newletter.png",
        path: __dirname + "/newletter.png",
        cid: "logo",
      },
    ],
    html: `Đây là chương trình khuyến mãi của chúng tôi xin mời bạn kham khảo`,
    // html body
  });
};

module.exports = {
  sendMailSV,
  sendNewLetterSV,
};
