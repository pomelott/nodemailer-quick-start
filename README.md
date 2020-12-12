# nodemailer-quick-start

face to practical workflow, get started with nodemailer quickly. benefit from this, please star !

* benefit from this, please start✨ for encouragement.

## description

nodemailer-quick-start split the sending-mail process into three steps, checkCondition、initModel、sendMail. and checkCondition is not necessary but the last two steps.

## fast use

### download

```shell
  npm i nodemailer-quick-start
```

```shell
  yarn add nodemailer-quick-start
```

### call

* with the test user of nodemailer

```js
const quickStart = require("nodemailer-quick-start");
quickStart();
```

* with your own account

```js
const quickStart = require("nodemailer-quick-start");
quickStart({
  initModel (modelHandler) {
    // need to return mail model for sending mail
    return modelHandler.baseModel;
  },
  async sendMail (mailHandler) {
    let {transportDefault, sendConfDefault} = mailHandler.modelStd.data[0];
    let transporter, {nodemailer} = mailHandler;
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
```

* with some conditions for sending mail, use call function `checkCondition`

```js
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
    initModel (modelHandler) {
      console.log(modelHandler.checkStd); // the return value from checkCondition
      return modelHandler.baseModel;
    },
    async sendMail (mailHandler) {
      let {transportDefault, sendConfDefault} = mailHandler.modelStd.data[0];
      let transporter, {nodemailer} = mailHandler;
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
```


## detail

* more detail of example, please view `example/`
* you can generate the template model of mail in your own way with the call `initModel`. even use HTML.
* for other transport way of sending mail, you can custom with `nodemailer` in the call `sendMail`.

## notice

for more information view [nodemailer](https://nodemailer.com/about/)
