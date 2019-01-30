"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var store2_1 = __importDefault(require("store2"));
var Storage = /** @class */ (function () {
    function Storage(type) {
        this.defaultStorage = store2_1.default.local;
        this.storage = type ? store2_1.default[type] : this.defaultStorage;
    }
    Storage.prototype.get = function (key) {
        return this.storage.get(key);
    };
    Storage.prototype.set = function (key, data) {
        return this.storage.set(key, data);
    };
    Storage.prototype.remove = function (key) {
        return this.storage.remove(key);
    };
    Storage.prototype.clearAll = function () {
        return this.storage.clearAll();
    };
    return Storage;
}());
exports.default = Storage;
exports.storage = new Storage('local');
//# sourceMappingURL=storage.js.map
