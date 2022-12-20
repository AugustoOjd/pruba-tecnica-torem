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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
var _ServerApp_app, _ServerApp_port, _ServerApp_paths;
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
// import routas
const chats_1 = __importDefault(require("../routes/chats"));
const messages_1 = __importDefault(require("../routes/messages"));
class ServerApp {
    constructor() {
        _ServerApp_app.set(this, void 0);
        _ServerApp_port.set(this, void 0);
        _ServerApp_paths.set(this, {
            chats: '/api/chats',
            messages: '/api/messages'
        });
        __classPrivateFieldSet(this, _ServerApp_app, (0, express_1.default)(), "f");
        __classPrivateFieldSet(this, _ServerApp_port, process.env.PORT || '8080', "f");
        // Middlewares
        this.middlewares();
        // Rutas
        this.routes();
    }
    middlewares() {
        // COR 
        __classPrivateFieldGet(this, _ServerApp_app, "f").use((0, cors_1.default)());
        // Lectura del body
        __classPrivateFieldGet(this, _ServerApp_app, "f").use(express_1.default.json());
    }
    routes() {
        __classPrivateFieldGet(this, _ServerApp_app, "f").use(__classPrivateFieldGet(this, _ServerApp_paths, "f").chats, chats_1.default);
        __classPrivateFieldGet(this, _ServerApp_app, "f").use(__classPrivateFieldGet(this, _ServerApp_paths, "f").messages, messages_1.default);
    }
    listen() {
        __classPrivateFieldGet(this, _ServerApp_app, "f").listen(__classPrivateFieldGet(this, _ServerApp_port, "f"), () => console.log(`server escuchando en el puerto ${__classPrivateFieldGet(this, _ServerApp_port, "f")}`));
    }
}
exports.default = ServerApp;
_ServerApp_app = new WeakMap(), _ServerApp_port = new WeakMap(), _ServerApp_paths = new WeakMap();
