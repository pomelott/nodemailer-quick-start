# nodemailer-quick-start

face to practical workflow, get started with nodemailer quickly. benefit from this, please star !

## platform

* Condition

Don't send mail until meeting the conditions.

* model

After meeting the conditions, you need to generate the model template for mail.

* action

just do sending mail.

## fast use

take SMTP transport for an example. modify the file in `/model/index.ts`, custom your server info and send config, or use default config. and then run command：

```shell
  npm start
```

## coreEvent

this platform takes coreEvent as core, it is a event register. for type detail, please view `/_platform/lib/coreEvent.ts`

### register

* Arguments:

```ts
  eventName: string
  taskMark: string
  handler: (data?: any): TriggerFnPromise => {}
```

* Returns: `boolean`

### trigger

* Arguments:

```ts
  eventName: string
  data?: any
  taskMark?: string
```

* Returns: `TriggerAllFnReturnValue`

### gc

* Arguments:

```ts
  eventName?: string
  taskMark?: string
```

* Returns: `boolean`

## detail

* for custom use, only use `/condition`, `/model`, `/action` is enough, the detail as follows:

* for example: if condition-1 and condition-2 met, that means the register handler didn't returns false when called. the follow-ups won't execute until two conditions are met.

* you can generate the template model of mail in your own way. even use HTML.

* for other transport way of sending mail, you can change the action code. for SMTP, just change the config as fast use is enough.

## notice

for more information view [nodemailer](https://nodemailer.com/about/)
