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
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var React = __importStar(require("react"));
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var antd_1 = require("antd");
var en_US_1 = __importDefault(require("antd/lib/locale-provider/en_US"));
var RequestForm_1 = require("./request-form/RequestForm");
var Dashboard_module_scss_1 = __importDefault(require("./Dashboard.module.scss"));
var DefaultDataGrid_1 = __importDefault(require("../../../components/data-grid/DefaultDataGrid"));
var Dashboard = /** @class */ (function (_super) {
    __extends(Dashboard, _super);
    function Dashboard() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Dashboard.prototype.render = function () {
        return (React.createElement("div", null,
            React.createElement("div", { className: Dashboard_module_scss_1.default.dashboard },
                React.createElement("div", { className: Dashboard_module_scss_1.default.container },
                    React.createElement("div", { className: Dashboard_module_scss_1.default.row },
                        React.createElement("div", { className: Dashboard_module_scss_1.default.column },
                            React.createElement("span", { className: Dashboard_module_scss_1.default.title }, "Welcome to SharePoint!"),
                            React.createElement("p", { className: Dashboard_module_scss_1.default.subTitle }, "Customize SharePoint experiences using Web Parts."),
                            React.createElement("p", { className: Dashboard_module_scss_1.default.description }, sp_lodash_subset_1.escape(this.props.description)))))),
            React.createElement(antd_1.LocaleProvider, { locale: en_US_1.default },
                React.createElement(RequestForm_1.WrappedRequestFormForm, { description: 'Hi, this is my first component' })),
            React.createElement(DefaultDataGrid_1.default, { defaultPageSize: 5, data: [
                    { name: "murtaza", lastname: "nathani" },
                    { name: "murtaza", lastname: "nathani" },
                    { name: "murtaza", lastname: "nathani" },
                    { name: "murtaza", lastname: "nathani" },
                    { name: "murtaza", lastname: "nathani" },
                    { name: "murtaza", lastname: "nathani" }
                ], columns: [
                    {
                        Header: "Name",
                        columns: [
                            {
                                Header: "First Name",
                                accessor: "name"
                            },
                            {
                                Header: "Last Name",
                                id: "lastname",
                                accessor: "lastname"
                            }
                        ]
                    }
                ] })));
    };
    return Dashboard;
}(React.Component));
exports.default = Dashboard;
//# sourceMappingURL=Dashboard.js.map
