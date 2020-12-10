import {InterfaceRegisterFnParam} from "../../_platform/interface";
export default (msg: InterfaceRegisterFnParam) => {
  if (msg.checkStd.data.indexOf(false) !== -1) {
    console.log("condition for sending mail not met !")
    process.exit(0);
  }
  return msg.baseModel;
}