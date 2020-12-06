"use strict";

import coreEvent, {TriggerAllFnResolveSuccessValue, TriggerAllFnResolveValue} from "./_platform/lib/coreEvent";
import registerCore from "./_platform/register";

async function main() {

  let checkStd: TriggerAllFnResolveValue,
      modelStd: TriggerAllFnResolveValue,
      actionStd: TriggerAllFnResolveValue;

  registerCore();

  checkStd = await coreEvent.trigger("checkCondition", new Date().getTime());
  if (checkStd && (checkStd as TriggerAllFnResolveSuccessValue).status === 0) {
    console.log("all check passed !");
    modelStd = await coreEvent.trigger("initModel", (checkStd as TriggerAllFnResolveSuccessValue).data[0]);
    actionStd = await coreEvent.trigger("sendMail", (modelStd as TriggerAllFnResolveSuccessValue).data[0]);
  }

  coreEvent.gc();

}

main().catch(console.error);