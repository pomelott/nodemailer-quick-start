const quickStart = require("../index.js");

switch (process.argv[2]) {
  case "custom":
      quickStart({
        initModel (msg) {
          return msg.baseModel;
        },
        async sendMail (msg) {
          let {transportDefault, sendConfDefault} = msg.modelStd.data[0];
          let transporter, {nodemailer} = msg;
          // take smtp transport for an example
          transportDefault = {
            host: "smtp.exmail.qq.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "", // add your user, such as "xxx@example.com"
              pass: "", // add your password for mail auth
            }
          }
          sendConfDefault.from = ``;  // according to your username of mail, such as `"username" <xxx@example.com>`
          sendConfDefault.to = ``;   // the auth who you want to send to
          transporter = await nodemailer.createTransport(transportDefault);
          transporter.sendMail(sendConfDefault).then(() => {
            console.log("send success !");
          }).catch((err) => {
            console.log("send err !");
            console.log(err)
          });
          return true;
        }
      });
      break;
  case "condition":
      quickStart({
        checkCondition () {
          let date = new Date();
          // not send mail if today is Sunday
          if (date.getDay() === 0) {
            console.log("condition not met !!!");
            process.exit(0)
          }
          return true;
        },
        initModel (msg) {
          return msg.baseModel;
        },
        async sendMail (msg) {
          let {transportDefault, sendConfDefault} = msg.modelStd.data[0];
          let transporter, {nodemailer} = msg;
          // take smtp transport for an example
          transportDefault = {
            host: "smtp.exmail.qq.com",
            port: 465,
            secure: true, // true for 465, false for other ports
            auth: {
              user: "", // add your user, such as "xxx@example.com"
              pass: "", // add your password for mail auth
            }
          }
          sendConfDefault.from = ``;  // according to your username of mail, such as `"username" <xxx@example.com>`
          sendConfDefault.to = ``;   // the auth who you want to send to
          if (!transportDefault.auth.user || !transportDefault.auth.pass) {
            console.log("first to add your username and password !");
            process.exit(0);
          }
          transporter = await nodemailer.createTransport(transportDefault);
          transporter.sendMail(sendConfDefault).then(() => {
            console.log("send success !");
          }).catch((err) => {
            console.log("send err !");
            console.log(err)
          });
          return true;
        }
      });
      break;
  default:
    quickStart();
}

