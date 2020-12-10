"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sendConfDefault = exports.transportDefault = void 0;
exports.transportDefault = {
    host: "smtp.ethereal.email",
    port: 587,
    secure: false,
    auth: {
        user: "",
        pass: "",
    },
};
exports.sendConfDefault = {
    from: `"👻 nodemailer-quick-start notice 👻" <foo@example.com>`,
    to: `"user" <bar@example.com>`,
    subject: "Nodemailer-quick-start test mail",
    text: "Hello nodemailer-quick-start !",
    html: "<b>Hello nodemailer-quick-start ! test mail succeed, for more information please view <a>https://github.com/pomelott</a> </b>",
};
