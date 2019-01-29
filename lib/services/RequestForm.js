"use strict";
var __assign = (this && this.__assign) || Object.assign || function(t) {
    for (var s, i = 1, n = arguments.length; i < n; i++) {
        s = arguments[i];
        for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
            t[p] = s[p];
    }
    return t;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = {
    datePicker: {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please fill the date !'
            }
        ]
    },
    timePicker: {
        rules: [
            {
                type: 'object',
                required: true,
                message: 'Please fill the time !'
            }
        ]
    },
    range: {
        rules: [
            {
                type: 'array',
                required: true,
                message: 'Please fill the range field !'
            }
        ]
    },
    multiSelect: {
        rules: [
            {
                type: 'array',
                required: true,
                message: 'Please fill the multiple options !'
            }
        ]
    },
    email: {
        rules: [
            {
                type: 'email',
                message: 'The input is not valid E-mail!'
            },
            {
                required: true,
                message: 'Please input your E-mail!'
            }
        ]
    },
    checkBox: {
        initialValue: true,
        rules: [
            {
                type: 'boolean',
                required: true,
                message: 'Please fill the field !'
            }
        ]
    },
    input: {
        rules: [
            {
                type: 'string',
                required: true,
                message: 'Please fill the field !'
            }
        ]
    },
    number: {
        rules: [
            {
                type: 'number',
                required: true,
                message: 'Please fill the field !'
            }
        ]
    }
};
function validation(err, fieldsValue) {
    if (err) {
        console.log('Error: ', err);
        return err;
    }
    // Should format date value before submit.
    var rangeValue = fieldsValue['range-picker'];
    var rangeTimeValue = fieldsValue['range-time-picker'];
    var values = __assign({}, fieldsValue, { 'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'), 'date-time-picker': fieldsValue['date-time-picker'].format('YYYY-MM-DD HH:mm:ss'), 'range-picker': [
            rangeValue[0].format('YYYY-MM-DD'),
            rangeValue[1].format('YYYY-MM-DD')
        ], 'range-time-picker': [
            rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
            rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss')
        ], 'time-picker': fieldsValue['time-picker'].format('HH:mm:ss') });
    console.log('Received values of form: ', values);
    return values;
}
exports.validation = validation;
//# sourceMappingURL=RequestForm.js.map
