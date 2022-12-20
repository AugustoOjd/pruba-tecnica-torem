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
var _TextMessage_text;
Object.defineProperty(exports, "__esModule", { value: true });
const massage_1 = __importDefault(require("./massage"));
class TextMessage extends massage_1.default {
    constructor(timestamp, isReceived) {
        super(timestamp, isReceived);
        _TextMessage_text.set(this, void 0);
        __classPrivateFieldSet(this, _TextMessage_text, '', "f");
    }
    addText(text, id) {
        __classPrivateFieldSet(this, _TextMessage_text, text, "f");
        let body = {
            id,
            text,
            timestamp: super.showTimestamp(),
            isReceived: super.showStatus()
        };
        return body;
    }
}
exports.default = TextMessage;
_TextMessage_text = new WeakMap();
