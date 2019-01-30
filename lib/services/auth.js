"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var storage_1 = require("./storage");
function isAlreadyAuthorized() {
    return storage_1.storage.get('someKey');
}
exports.isAlreadyAuthorized = isAlreadyAuthorized;
//# sourceMappingURL=auth.js.map
