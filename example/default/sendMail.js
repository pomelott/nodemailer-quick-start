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
    let testAccount = yield nodemailer.createTestAccount();
    transportDefault.auth.user = testAccount.user;
    transportDefault.auth.pass = testAccount.pass;
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
