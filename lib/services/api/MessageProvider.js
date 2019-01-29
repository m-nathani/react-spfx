"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var HttpRequest_1 = __importDefault(require("./HttpRequest"));
var MessageProvider = /** @class */ (function (_super) {
    __extends(MessageProvider, _super);
    function MessageProvider(path) {
        var _this = _super.call(this) || this;
        _this.path = '';
        _this.path = path;
        return _this;
    }
    MessageProvider.prototype.sendMessage = function (data) {
        return this.create(this.path + "/send-message", data);
    };
    return MessageProvider;
}(HttpRequest_1.default));
exports.default = MessageProvider;
//# sourceMappingURL=MessageProvider.js.map
