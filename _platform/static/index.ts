
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
  from: `"👻 Node Robot 👻" <foo@example.com>`, // sender address
  to: `"user" <bar@example.com>`, // list of receivers
  subject: "Nodemailer-quick-start test mail", // Subject line
  text: "Hello world !", // plain text body
  html: "<b>Hello world? nodemailer quick-start !</b>", // html bod
}

