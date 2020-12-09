export interface InterfaceRegisterFnParam {
  [key:string]: any
}
export interface InterfaceMainParam {
  checkCondition: (a:InterfaceRegisterFnParam) => any,
  initModel: (a:InterfaceRegisterFnParam) => any,
  sendMail: (a:InterfaceRegisterFnParam) => any
}