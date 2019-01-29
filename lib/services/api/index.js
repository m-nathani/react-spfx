"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var MessageProvider_1 = __importDefault(require("./MessageProvider"));
// Give arg to provider to start endpoint with specific path for example = abc.com/api/person
exports.MessageService = new MessageProvider_1.default('message');
//# sourceMappingURL=index.js.map
