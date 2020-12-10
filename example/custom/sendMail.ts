import { InterfaceRegisterFnParam } from "../../_platform/interface";

export default async (msg:InterfaceRegisterFnParam) => {
  let {nodemailer, modelStd} = msg;
  let {transportDefault, sendConfDefault} = modelStd.data[0];
  console.log("start to send mail...")
  transportDefault = {
    host: "smtp.exmail.qq.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: "", // generated ethereal user
      pass: "", // generated ethereal password
    }
  }
  sendConfDefault = {
    from: '"👻 nodemailer-quick-start notice 👻" <foo@example.com>',
    to: '"user" <bar@example.com>',
    subject: 'Nodemailer-quick-start test mail',
    text: 'Hello nodemailer-quick-start !',
    html:
      '<b>Hello nodemailer-quick-start ! test mail succeed, for more information please view <a>https://github.com/pomelott</a> </b>'
  };
  if (!transportDefault.auth.user || !transportDefault.auth.pass) {
    console.log("please custom your own mail config with transportDefault and sendConfDefault in /example/custom/sendMail.ts !")
    process.exit(0)
  }
  let transporter = await nodemailer.createTransport(transportDefault);
  console.log("sending...")
  transporter.sendMail(sendConfDefault).then((info:any) => {
    console.log("send success !");
    console.log("Message sent: %s", info.messageId);
    console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
  }).catch((err:any) => {
    console.log("send err !");
    console.log(err)
  });
  return true;
}