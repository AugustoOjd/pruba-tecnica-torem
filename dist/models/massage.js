"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var __classPrivateFieldGet = (this && this.__classPrivateFieldGet) || function (receiver, state, kind, f) {
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a getter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot read private member from an object whose class did not declare it");
    return kind === "m" ? f : kind === "a" ? f.call(receiver) : f ? f.value : state.get(receiver);
};
var _Message_timestamp, _Message_isReceived;
Object.defineProperty(exports, "__esModule", { value: true });
class Message {
    constructor(timestamp = new Date(Date.now()), isReceived) {
        _Message_timestamp.set(this, void 0);
        _Message_isReceived.set(this, void 0);
        __classPrivateFieldSet(this, _Message_timestamp, timestamp, "f");
        __classPrivateFieldSet(this, _Message_isReceived, isReceived, "f");
    }
    showTimestamp() {
        return __classPrivateFieldGet(this, _Message_timestamp, "f");
    }
    showStatus() {
        return __classPrivateFieldGet(this, _Message_isReceived, "f");
    }
}
exports.default = Message;
_Message_timestamp = new WeakMap(), _Message_isReceived = new WeakMap();
