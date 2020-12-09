import quickStart from "../index";
import {InterfaceRegisterFnParam} from "../_platform/interface"

quickStart({
  checkCondition () {
    console.log("check condition");
    return true;
  },
  initModel (msg:InterfaceRegisterFnParam) {
    console.log(msg)
    return {
      model: "test model"
    }
  },
  sendMail (msg: InterfaceRegisterFnParam) {
    console.log(msg)
  },
})

// quickStart();