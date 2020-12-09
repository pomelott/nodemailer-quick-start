// import {TypeRegisterFnParam} from "../../_platform/type"
import {InterfaceRegisterFnParam} from "../../_platform/interface"
export default (msg:InterfaceRegisterFnParam) => {
  console.log("default send mail.")
  console.log(msg)
  return {}
}