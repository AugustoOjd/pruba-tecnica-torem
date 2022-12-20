"use strict";
var __classPrivateFieldSet = (this && this.__classPrivateFieldSet) || function (receiver, state, value, kind, f) {
    if (kind === "m") throw new TypeError("Private method is not writable");
    if (kind === "a" && !f) throw new TypeError("Private accessor was defined without a setter");
    if (typeof state === "function" ? receiver !== state || !f : !state.has(receiver)) throw new TypeError("Cannot write private member to an object whose class did not declare it");
    return (kind === "a" ? f.call(receiver, value) : f ? f.value = value : state.set(receiver, value)), value;
};
var _Customer_firstName, _Customer_lastName, _Customer_customer;
Object.defineProperty(exports, "__esModule", { value: true });
class Customer {
    constructor(firstName, lastName, customer) {
        _Customer_firstName.set(this, void 0);
        _Customer_lastName.set(this, void 0);
        _Customer_customer.set(this, void 0);
        __classPrivateFieldSet(this, _Customer_firstName, firstName, "f");
        __classPrivateFieldSet(this, _Customer_lastName, lastName, "f");
        __classPrivateFieldSet(this, _Customer_customer, customer, "f");
    }
}
exports.default = Customer;
_Customer_firstName = new WeakMap(), _Customer_lastName = new WeakMap(), _Customer_customer = new WeakMap();
