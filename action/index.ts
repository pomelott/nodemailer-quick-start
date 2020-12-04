import coreEvent, { TriggerAllFnResolveSuccessValue } from "../_platform/lib/coreEvent";
const nodemailer = require("nodemailer");

export type MailMsgModel = {
  [key: string]: any
}

export default () => {
  coreEvent.register("sendMail", "default", async (model: MailMsgModel) => {

    const {host, port, secure, auth} = model.transport;
    const {from, to, subject, text, html} = model.conf;
    let testAccount = await nodemailer.createTestAccount();
    if (!auth.user) {
      auth.user = testAccount.user;
    }
    if (!auth.pass) {
      auth.pass = testAccount.pass;
    }
    console.log("sending mail...")
    let transporter = await nodemailer.createTransport({
      host,
      port,
      secure,
      auth,
    });

    transporter.sendMail({
      from,
      to,
      subject,
      text,
      html
    }).then((info:any) => {
      console.log("send success !");
      console.log("Message sent: %s", info.messageId);
      // Message sent: <b658f8ca-6296-ccf4-8306-87d57a0b4321@example.com>

      // Preview only available when sending through an Ethereal account
      console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }).catch((err:any) => {
      console.log("send err !");
      console.log(err)
    });
    return true;
  })
}