
export const transportDefault = {
  host: "smtp.ethereal.email",
  port: 587,
  secure: false, // true for 465, false for other ports
  auth: {
    user: "", // generated ethereal user
    pass: "", // generated ethereal password
  },
}

export const sendConfDefault = {
  from: `"👻 nodemailer-quick-start notice 👻" <foo@example.com>`, // sender address
  to: `"user" <bar@example.com>`, // list of receivers
  subject: "Nodemailer-quick-start test mail", // Subject line
  text: "Hello nodemailer-quick-start !", // plain text body
  html: "<b>Hello nodemailer-quick-start ! test mail succeed, for more information please view <a>https://github.com/pomelott</a> </b>", // html bod
}

