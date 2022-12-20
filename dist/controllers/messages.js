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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getMessages = exports.postMessages = void 0;
const locationMessage_1 = __importDefault(require("../models/locationMessage"));
const textMessage_1 = __importDefault(require("../models/textMessage"));
const postMessages = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { chatId } = req.params;
    const { text, prop, lati = 'any lati', long = 'any long' } = req.body;
    const messages = new textMessage_1.default(new Date(Date.now()), prop);
    const location = new locationMessage_1.default(lati, long, messages.showTimestamp(), messages.showStatus());
    try {
        let message = messages.addText(text, chatId);
        let showloca = location.showLocation(lati, long);
        yield res.status(200).json(Object.assign(Object.assign({}, message), showloca));
    }
    catch (error) {
        yield console.log(error);
    }
});
exports.postMessages = postMessages;
exports.getMessages = ((req, res) => {
});
