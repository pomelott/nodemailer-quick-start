import coreEvent, { TriggerAllFnResolveValue } from "../_platform/lib/coreEvent";
import {transportDefault, sendConfDefault} from "../_platform/static";
const customTransport = {
  host: "smtp.exmail.qq.com",
  port: 465,
  secure: true, // true for 465, false for other ports
  auth: {
    user: "", // generated ethereal user
    pass: "", // generated ethereal password
  }
}

const customSendConf  = {
  from: `"👻 Node Robot 👻" <wangyateng@moyi365.com>`, // sender address
  to: `"fe" <pomelott@163.com>`, // list of receivers
  subject: "Nodemailer-quick-start test mail", // Subject line
  text: "Hello world !", // plain text body
  html: "<b>Hello world? nodemailer quick-start !</b>", // html body
}

export default () => {
  coreEvent.register("initModel", "default", (): TriggerAllFnResolveValue => {
    return {
        transport: customTransport || transportDefault,
        conf: customSendConf || sendConfDefault
    }
  })
}