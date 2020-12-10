"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (msg) => __awaiter(void 0, void 0, void 0, function* () {
    let { nodemailer, modelStd } = msg;
    let { transportDefault, sendConfDefault } = modelStd.data[0];
    console.log("start to send mail...");
    transportDefault = {
        host: "smtp.exmail.qq.com",
        port: 465,
        secure: true,
        auth: {
            user: "",
            pass: "",
        }
    };
    sendConfDefault = {
        from: '"👻 nodemailer-quick-start notice 👻" <foo@example.com>',
        to: '"user" <bar@example.com>',
        subject: 'Nodemailer-quick-start test mail',
        text: 'Hello nodemailer-quick-start !',
        html: '<b>Hello nodemailer-quick-start ! test mail succeed, for more information please view <a>https://github.com/pomelott</a> </b>'
    };
    if (!transportDefault.auth.user || !transportDefault.auth.pass) {
        console.log("please custom your own mail config with transportDefault and sendConfDefault in /example/custom/sendMail.ts !");
        process.exit(0);
    }
    let transporter = yield nodemailer.createTransport(transportDefault);
    console.log("sending...");
    transporter.sendMail(sendConfDefault).then((info) => {
        console.log("send success !");
        console.log("Message sent: %s", info.messageId);
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
    }).catch((err) => {
        console.log("send err !");
        console.log(err);
    });
    return true;
});
