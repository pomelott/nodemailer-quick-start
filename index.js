"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
const coreEvent_1 = __importDefault(require("./_platform/lib/coreEvent"));
const nodemailer_1 = __importDefault(require("nodemailer"));
const defaultMainParam = __importStar(require("./example/default/index"));
const baseModel = __importStar(require("./_platform/static"));
function quickStart(param) {
    return __awaiter(this, void 0, void 0, function* () {
        try {
            let checkStd, modelStd, actionStd;
            if (!param) {
                param = defaultMainParam;
            }
            let { checkCondition, initModel, sendMail } = param;
            coreEvent_1.default.register("checkCondition", "default", checkCondition);
            coreEvent_1.default.register("initModel", "default", initModel);
            coreEvent_1.default.register("sendMail", "default", sendMail);
            checkStd = yield coreEvent_1.default.trigger("checkCondition");
            modelStd = yield coreEvent_1.default.trigger("initModel", { checkStd, baseModel });
            actionStd = yield coreEvent_1.default.trigger("sendMail", { modelStd, nodemailer: nodemailer_1.default });
            coreEvent_1.default.gc();
        }
        catch (err) {
            console.error(err);
        }
    });
}
module.exports = quickStart;
