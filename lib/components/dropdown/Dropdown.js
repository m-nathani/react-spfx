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
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) if (e.indexOf(p[i]) < 0)
            t[p[i]] = s[p[i]];
    return t;
};
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var antd_1 = require("antd");
function dropDownMenu(items) {
    return (React.createElement(antd_1.Menu, null, items.map(function (item) {
        return React.createElement(antd_1.Menu.Item, { key: item.key }, item.value);
    })));
}
exports.dropDownMenu = dropDownMenu;
var EDropdown = /** @class */ (function (_super) {
    __extends(EDropdown, _super);
    function EDropdown() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        return _super.apply(this, args) || this;
    }
    EDropdown.prototype.renderButtonDropDown = function () {
        return (React.createElement(antd_1.Button, null,
            this.props.label,
            " ",
            React.createElement(antd_1.Icon, { type: 'down' })));
    };
    EDropdown.prototype.renderAnchorDropDown = function () {
        return (React.createElement("a", { className: 'ant-dropdown-link' },
            this.props.label,
            " ",
            React.createElement(antd_1.Icon, { type: 'down' })));
    };
    EDropdown.prototype.render = function () {
        var _a = this.props, isButtonDropdown = _a.isButtonDropdown, overlay = _a.overlay, rest = __rest(_a, ["isButtonDropdown", "overlay"]);
        return (React.createElement(antd_1.Dropdown, __assign({}, rest, { overlay: overlay }), isButtonDropdown
            ? this.renderButtonDropDown()
            : this.renderAnchorDropDown()));
    };
    return EDropdown;
}(React.Component));
exports.EDropdown = EDropdown;
//# sourceMappingURL=Dropdown.js.map