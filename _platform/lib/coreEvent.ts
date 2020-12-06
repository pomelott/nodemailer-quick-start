export type TriggerFnPromise = boolean | Promise<boolean | object>;

export type TriggerFnPromiseAll = Array<TriggerFnPromise>;

export type TriggerItemFnReturnValue = boolean | {};

export type TriggerAllFnResolveSuccessValue = {
  [key:string]: any,
  status?: 0|1
}

export type TriggerAllFnResolveValue = TriggerAllFnResolveSuccessValue | boolean;

export type TriggerAllFnReturnValue = boolean | TriggerAllFnResolveSuccessValue | Promise<TriggerAllFnResolveValue>;

export interface CoreEventFunction {
  ([]):TriggerAllFnReturnValue
}

export interface CoreEvent {
  [key:string]: {
    [key:string]: CoreEventFunction
  }
};

let coreEvent:CoreEvent = {};


function register (type:string, mark:string, fn: CoreEventFunction) {
  if (!coreEvent[type]) {
      coreEvent[type] = {};
  }
  coreEvent[type][mark] = fn;
  return true;
}

function trigger (type:string, data?:any, mark?:string):TriggerAllFnReturnValue{
  let fns = coreEvent[type], pro:TriggerFnPromiseAll = [], resolveData:Array<any> = [];
  if (!fns) return false;
  if (mark) {
    pro.push(new Promise(async (resolve, reject) => {
      resolve(await fns[mark](data))
    }))
  } else {
    for (let index in fns) {
      if (fns.hasOwnProperty(index)) {
        pro.push(new Promise(async (resolve, reject) => {
          let temp = await fns[index](data);
          resolveData.push(temp)
          resolve(true)
        }))
      }
    }
  }
  return new Promise(async (resolve, reject) => {
    let proAll = await Promise.all(pro),
        msg:TriggerAllFnResolveSuccessValue = {
          status: 0,
          data: resolveData
        };
    if (proAll.length && proAll.indexOf(false) === -1) {
      resolve(msg)
    } else {
      msg.status = 1;
      resolve(msg)
    }
  })
}

function gc (type?:string, mark?:string) {
  let fns;
  if (!type) {
    coreEvent = {};
    return true;
  }
  fns = coreEvent[type];
  if (!fns) {
      return false;
  }
  if (!mark) {
      delete coreEvent[type];
  } else {
      for (let index in fns) {
          if (index === mark) {
              delete coreEvent[type][index];
          }
      }
  }
  return true;
}

export default {
  register,
  trigger,
  gc
}