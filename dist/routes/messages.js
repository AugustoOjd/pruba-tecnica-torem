"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const messages_1 = require("../controllers/messages");
const router = (0, express_1.Router)();
router.post('/:chatId', messages_1.postMessages);
router.get('/:chatId', messages_1.getMessages);
exports.default = router;
