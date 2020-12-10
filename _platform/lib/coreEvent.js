"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
;
let coreEvent = {};
function register(type, mark, fn) {
    if (!fn)
        return;
    if (!coreEvent[type]) {
        coreEvent[type] = {};
    }
    if (!mark) {
        mark = "default";
    }
    coreEvent[type][mark] = fn;
    return true;
}
function trigger(type, data, mark) {
    let fns = coreEvent[type], pro = [], resolveData = [];
    if (!fns)
        return false;
    if (mark) {
        if (!fns[mark]) {
            return false;
        }
        pro.push(new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
            resolve(yield fns[mark](data));
        })));
    }
    else {
        for (let index in fns) {
            if (fns.hasOwnProperty(index)) {
                if (!fns[index]) {
                    continue;
                }
                pro.push(new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
                    let temp = yield fns[index](data);
                    resolveData.push(temp);
                    resolve(true);
                })));
            }
        }
    }
    return new Promise((resolve, reject) => __awaiter(this, void 0, void 0, function* () {
        let proAll = yield Promise.all(pro), msg = {
            status: 0,
            data: resolveData
        };
        if (proAll.length && proAll.indexOf(false) === -1) {
            resolve(msg);
        }
        else {
            msg.status = 1;
            resolve(msg);
        }
    }));
}
function gc(type, mark) {
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
    }
    else {
        for (let index in fns) {
            if (index === mark) {
                delete coreEvent[type][index];
            }
        }
    }
    return true;
}
exports.default = {
    register,
    trigger,
    gc
};
