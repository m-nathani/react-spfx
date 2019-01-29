import moment from 'moment';

export const config = {
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

export function validation(err: any, fieldsValue: any): any {
  if (err) {
    console.log('Error: ', err);
    return err;
  }

  // Should format date value before submit.
  const rangeValue: Array<moment.Moment> = fieldsValue['range-picker'];
  const rangeTimeValue: Array<moment.Moment> = fieldsValue['range-time-picker'];
  const values: Object = {
    ...fieldsValue,
    'date-picker': fieldsValue['date-picker'].format('YYYY-MM-DD'),
    'date-time-picker': fieldsValue['date-time-picker'].format(
      'YYYY-MM-DD HH:mm:ss'
    ),
    'range-picker': [
      rangeValue[0].format('YYYY-MM-DD'),
      rangeValue[1].format('YYYY-MM-DD')
    ],
    'range-time-picker': [
      rangeTimeValue[0].format('YYYY-MM-DD HH:mm:ss'),
      rangeTimeValue[1].format('YYYY-MM-DD HH:mm:ss')
    ],
    'time-picker': fieldsValue['time-picker'].format('HH:mm:ss')
  };
  console.log('Received values of form: ', values);
  return values;
}
