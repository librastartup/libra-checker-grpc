"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const bignumber_js_1 = __importDefault(require("bignumber.js"));
const AddressLCS_1 = require("./AddressLCS");
class RawTransactionLCS {
    constructor(sender, sequence, payload) {
        this.maxGasAmount = new bignumber_js_1.default(1000000);
        this.gasUnitPrice = new bignumber_js_1.default(0);
        this.expirtationTime = new bignumber_js_1.default(Math.floor(new Date().getTime() / 1000) + 100);
        this.sender = new AddressLCS_1.AddressLCS(sender);
        this.sequenceNumber = new bignumber_js_1.default(sequence);
        this.payload = payload;
    }
    // @TODO finish tostring method
    toString() {
        return '';
    }
}
exports.RawTransactionLCS = RawTransactionLCS;