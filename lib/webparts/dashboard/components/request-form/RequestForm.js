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
var antd_1 = require("antd");
var components_1 = require("../../../../components");
var RequestForm_module_scss_1 = __importDefault(require("./RequestForm.module.scss"));
var sp_lodash_subset_1 = require("@microsoft/sp-lodash-subset");
var services_1 = require("../../../../services");
var EFormItem = antd_1.Form.Item;
var RequestForm = /** @class */ (function (_super) {
    __extends(RequestForm, _super);
    function RequestForm() {
        var args = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            args[_i] = arguments[_i];
        }
        var _this = _super.call(this, args) || this;
        _this.handleSubmit = _this.handleSubmit.bind(_this);
        return _this;
    }
    RequestForm.prototype.handleSubmit = function (e) {
        e.preventDefault();
        this.props.form.validateFields(function (err, fieldsValue) {
            services_1.validation(err, fieldsValue);
        });
    };
    RequestForm.prototype.render = function () {
        var items = [
            { key: '1', value: 'one', disabled: false },
            { key: '2', value: 'one', disabled: false },
            { key: '3', value: 'one', disabled: false },
            { key: '4', value: 'one', disabled: false },
            { key: '5', value: 'one', disabled: false },
            { key: '6', value: 'one', disabled: false },
            { key: '7', value: 'one', disabled: true },
            { key: '8', value: 'one', disabled: false }
        ];
        var getFieldDecorator = this.props.form.getFieldDecorator;
        var formItemLayout = {
            labelCol: {
                xs: { span: 24 },
                sm: { span: 8 }
            },
            wrapperCol: {
                xs: { span: 24 },
                sm: { span: 16 }
            }
        };
        return (React.createElement("div", { className: RequestForm_module_scss_1.default.requestForm },
            React.createElement("div", { className: RequestForm_module_scss_1.default.container },
                React.createElement("div", { className: RequestForm_module_scss_1.default.row },
                    React.createElement("div", { className: RequestForm_module_scss_1.default.column },
                        React.createElement("p", { className: RequestForm_module_scss_1.default.description }, sp_lodash_subset_1.escape(this.props.description)),
                        React.createElement("br", null),
                        React.createElement(antd_1.Form, { onSubmit: this.handleSubmit },
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'AnchorDropdown' }), getFieldDecorator('anchor-hover-dropdown')(React.createElement(components_1.EDropdown, { isButtonDropdown: false, label: 'anchor hover dropdown', overlay: components_1.dropDownMenu(items) }))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'ButtonHoverDropdown' }), getFieldDecorator('button-hover-dropdown')(React.createElement(components_1.EDropdown, { isButtonDropdown: true, label: 'button hover dropdown', overlay: components_1.dropDownMenu(items) }))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'ButtonDropdown' }), getFieldDecorator('button-dropdown')(React.createElement(components_1.EButtonDropdown, { label: 'button dropdown', overlay: components_1.dropDownButtonMenu(items) }))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'DatePicker' }), getFieldDecorator('date-picker', services_1.config.datePicker)(React.createElement(components_1.EDatePicker, { format: 'MM/DD/YYYY' }))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'DatePicker[showTime]' }), getFieldDecorator('date-time-picker', services_1.config.datePicker)(React.createElement(components_1.EDatePicker, { showTime: true, format: 'YYYY-MM-DD HH:mm:ss' }))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'Checkbox' }), getFieldDecorator('check-box', services_1.config.checkBox)(React.createElement(components_1.ECheckbox, { name: 'mycheckbox', label: 'this is checkbox label' }))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'InputText' }), getFieldDecorator('input-text', services_1.config.input)(React.createElement(components_1.EInput, null))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'InputPassword' }), getFieldDecorator('input-password', services_1.config.input)(React.createElement(components_1.EInput, { prefix: React.createElement(antd_1.Icon, { type: 'lock', style: { fontSize: 13 } }), type: 'password', placeholder: 'Password' }))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'DefaultSelect' }), getFieldDecorator('default-select', services_1.config.input)(React.createElement(components_1.ESelect, { placeholder: 'default select', size: 'large', mode: 'default', style: { width: 120 }, options: items }))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'ComboboxSelect' }), getFieldDecorator('combobox-select', services_1.config.input)(React.createElement(components_1.ESelect, { placeholder: 'combobox select ', size: 'large', mode: 'combobox', style: { width: 120 }, options: items }))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'MultipleSelect' }), getFieldDecorator('multiple-select', services_1.config.multiSelect)(React.createElement(components_1.ESelect, { placeholder: 'multiple select ', size: 'large', mode: 'multiple', style: { width: 120 }, options: items }))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'RangePicker' }), getFieldDecorator('range-picker', services_1.config.range)(React.createElement(components_1.ERangePicker, null))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'RangePicker[showTime]' }), getFieldDecorator('range-time-picker', services_1.config.range)(React.createElement(components_1.ERangePicker, { showTime: true, format: 'YYYY-MM-DD HH:mm:ss' }))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'TimePicker' }), getFieldDecorator('time-picker', services_1.config.timePicker)(React.createElement(components_1.ETimePicker, null))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'InputNumber' }), getFieldDecorator('input-number', services_1.config.number)(React.createElement(components_1.EInputNumber, null))),
                            React.createElement(EFormItem, __assign({}, formItemLayout, { label: 'E-mail', hasFeedback: true }), getFieldDecorator('email', services_1.config.email)(React.createElement(components_1.EInput, null))),
                            React.createElement(EFormItem, { wrapperCol: {
                                    xs: { span: 24, offset: 0 },
                                    sm: { span: 16, offset: 8 }
                                } },
                                React.createElement(components_1.EButton, { type: 'primary', label: 'Submit', className: RequestForm_module_scss_1.default.button, htmlType: 'submit' }))))))));
    };
    return RequestForm;
}(React.Component));
exports.WrappedRequestFormForm = antd_1.Form.create()(RequestForm);
//# sourceMappingURL=RequestForm.js.map
