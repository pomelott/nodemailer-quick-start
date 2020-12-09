"use strict";

import coreEvent, {TriggerAllFnResolveSuccessValue, TriggerAllFnResolveValue} from "./_platform/lib/coreEvent";
import nodemailer from "nodemailer";
// import {TypefaceMainParam, TypefaceMainParamWithVoid} from "./_platform/type";
import {InterfaceMainParam} from "./_platform/interface";
import * as defaultMainParam from "./example/default/index"



export default async (param?: InterfaceMainParam) => {

  try {

    let checkStd: TriggerAllFnResolveValue,
        modelStd: TriggerAllFnResolveValue,
        actionStd: TriggerAllFnResolveValue;
    if (!param) {
      param = defaultMainParam;
    }

    let {checkCondition, initModel, sendMail} = param as InterfaceMainParam;

    coreEvent.register("checkCondition", "default", checkCondition);
    coreEvent.register("initModel", "default", initModel);
    coreEvent.register("sendMail", "default", sendMail);


    checkStd = await coreEvent.trigger("checkCondition");
    modelStd = await coreEvent.trigger("initModel", {checkStd, baseModel: {}});
    actionStd = await coreEvent.trigger("sendMail", {modelStd, nodemailer});

    coreEvent.gc();
  } catch (err) {
    console.error(err)
  }

}