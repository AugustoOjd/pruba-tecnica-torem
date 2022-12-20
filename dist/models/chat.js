"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _Chat_isFavourite;
Object.defineProperty(exports, "__esModule", { value: true });
const massage_1 = __importDefault(require("./massage"));
class Chat extends massage_1.default {
    constructor(isFavourite, timestamp, isReceived) {
        super(timestamp, isReceived);
        _Chat_isFavourite.set(this, void 0);
        __classPrivateFieldSet(this, _Chat_isFavourite, isFavourite, "f");
    }
}
exports.default = Chat;
_Chat_isFavourite = new WeakMap();
