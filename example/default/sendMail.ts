// import {TypeRegisterFnParam} from "../../_platform/type"
import {InterfaceRegisterFnParam} from "../../_platform/interface"
export default async (msg:InterfaceRegisterFnParam) => {
  let {nodemailer, modelStd} = msg;
  let {transportDefault, sendConfDefault} = modelStd.data[0];
  console.log("start to send mail...")
  let testAccount = await nodemailer.createTestAccount();
  transportDefault.auth.user = testAccount.user;
  transportDefault.auth.pass = testAccount.pass;
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