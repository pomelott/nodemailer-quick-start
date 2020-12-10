"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (msg) => {
    if (msg.checkStd.data.indexOf(false) !== -1) {
        console.log("condition for sending mail not met !");
        process.exit(0);
    }
    return msg.baseModel;
};
