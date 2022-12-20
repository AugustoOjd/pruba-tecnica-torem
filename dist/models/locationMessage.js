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
var _LocationMessage_latitude, _LocationMessage_longitude;
Object.defineProperty(exports, "__esModule", { value: true });
const massage_1 = __importDefault(require("./massage"));
class LocationMessage extends massage_1.default {
    constructor(latitude, longitude, timestamp, isReceived) {
        super(timestamp, isReceived);
        _LocationMessage_latitude.set(this, void 0);
        _LocationMessage_longitude.set(this, void 0);
        __classPrivateFieldSet(this, _LocationMessage_latitude, latitude, "f");
        __classPrivateFieldSet(this, _LocationMessage_longitude, longitude, "f");
    }
    showLocation(latitude, longitude) {
        __classPrivateFieldSet(this, _LocationMessage_latitude, latitude, "f");
        __classPrivateFieldSet(this, _LocationMessage_longitude, longitude, "f");
        let location = {
            latitude,
            longitude
        };
        return location;
    }
}
exports.default = LocationMessage;
_LocationMessage_latitude = new WeakMap(), _LocationMessage_longitude = new WeakMap();
