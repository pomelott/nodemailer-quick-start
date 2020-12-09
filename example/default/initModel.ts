import {InterfaceRegisterFnParam} from "../../_platform/interface";
export default (msg: InterfaceRegisterFnParam) => {
  console.log("default init model.")
  console.log(msg)
  return {
    conditionMsg: "check msg",
    baseModel: {}
  }
}