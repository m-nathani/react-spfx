import * as React from 'react';
import { Form, Icon } from 'antd';
import FormItem from 'antd/lib/form/FormItem';
import { IRequestForm } from './IRequestForm';
import {
  EButton,
  EDatePicker,
  EDropdown,
  ECheckbox,
  ETimePicker,
  EInput,
  EInputNumber,
  ERangePicker,
  ESelect,
  EButtonDropdown,
  dropDownMenu,
  dropDownButtonMenu,
} from '../../../../components';
import styles from './RequestForm.module.scss';
import { escape } from '@microsoft/sp-lodash-subset';
import { validation, config } from '../../../../services';
const EFormItem: typeof FormItem = Form.Item;

class RequestForm extends React.Component<IRequestForm, {}> {
  constructor(props: IRequestForm) {
    super(props);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  public handleSubmit(e: any): void {
    e.preventDefault();
    this.props.form.validateFields((err, fieldsValue) => {
      validation(err, fieldsValue);
    });
  }

  public render(): JSX.Element {
    const items = [
      { key: '1', value: 'one', disabled: false },
      { key: '2', value: 'one', disabled: false },
      { key: '3', value: 'one', disabled: false },
      { key: '4', value: 'one', disabled: false },
      { key: '5', value: 'one', disabled: false },
      { key: '6', value: 'one', disabled: false },
      { key: '7', value: 'one', disabled: true },
      { key: '8', value: 'one', disabled: false },
    ];

    const { getFieldDecorator } = this.props.form;
    const formItemLayout = {
      labelCol: {
        xs: { span: 24 },
        sm: { span: 8 },
      },
      wrapperCol: {
        xs: { span: 24 },
        sm: { span: 16 },
      },
    };
    return (
      <div className={ styles.requestForm }>
        <div className={styles.container}>
          <div className={styles.row}>
            <div className={styles.column}>
              <p className={styles.description}>
                {escape(this.props.description)}
              </p>
              <br />
              <Form onSubmit={this.handleSubmit}>
                <EFormItem {...formItemLayout} label='AnchorDropdown'>
                  {getFieldDecorator('anchor-hover-dropdown')(
                    <EDropdown
                      isButtonDropdown={false}
                      label={'anchor hover dropdown'}
                      overlay={dropDownMenu(items)}
                    />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='ButtonHoverDropdown'>
                  {getFieldDecorator('button-hover-dropdown')(
                    <EDropdown
                      isButtonDropdown={true}
                      label={'button hover dropdown'}
                      overlay={dropDownMenu(items)}
                    />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='ButtonDropdown'>
                  {getFieldDecorator('button-dropdown')(
                    <EButtonDropdown
                      label={'button dropdown'}
                      overlay={dropDownButtonMenu(items)}
                    />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='DatePicker'>
                  {getFieldDecorator('date-picker', config.datePicker)(
                    <EDatePicker format='MM/DD/YYYY' />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='DatePicker[showTime]'>
                  {getFieldDecorator('date-time-picker', config.datePicker)(
                    <EDatePicker showTime format='YYYY-MM-DD HH:mm:ss' />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='Checkbox'>
                  {getFieldDecorator('check-box', config.checkBox)(
                    <ECheckbox
                      name='mycheckbox'
                      label='this is checkbox label'
                    />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='InputText'>
                  {getFieldDecorator('input-text', config.input)(<EInput />)}
                </EFormItem>
                <EFormItem {...formItemLayout} label='InputPassword'>
                  {getFieldDecorator('input-password', config.input)(
                    <EInput
                      prefix={<Icon type='lock' style={{ fontSize: 13 }} />}
                      type='password'
                      placeholder='Password'
                    />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='DefaultSelect'>
                  {getFieldDecorator('default-select', config.input)(
                    <ESelect
                      placeholder='default select'
                      size='large'
                      mode='default'
                      style={{ width: 120 }}
                      options={items}
                    />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='ComboboxSelect'>
                  {getFieldDecorator('combobox-select', config.input)(
                    <ESelect
                      placeholder='combobox select '
                      size='large'
                      mode='combobox'
                      style={{ width: 120 }}
                      options={items}
                    />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='MultipleSelect'>
                  {getFieldDecorator('multiple-select', config.multiSelect)(
                    <ESelect
                      placeholder='multiple select '
                      size='large'
                      mode='multiple'
                      style={{ width: 120 }}
                      options={items}
                    />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='RangePicker'>
                  {getFieldDecorator('range-picker', config.range)(
                    <ERangePicker />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='RangePicker[showTime]'>
                  {getFieldDecorator('range-time-picker', config.range)(
                    <ERangePicker showTime format='YYYY-MM-DD HH:mm:ss' />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='TimePicker'>
                  {getFieldDecorator('time-picker', config.timePicker)(
                    <ETimePicker />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='InputNumber'>
                  {getFieldDecorator('input-number', config.number)(
                    <EInputNumber />,
                  )}
                </EFormItem>
                <EFormItem {...formItemLayout} label='E-mail' hasFeedback>
                  {getFieldDecorator('email', config.email)(<EInput />)}
                </EFormItem>
                <EFormItem
                  wrapperCol={{
                    xs: { span: 24, offset: 0 },
                    sm: { span: 16, offset: 8 },
                  }}
                >
                  <EButton
                    type='primary'
                    label='Submit'
                    className={styles.button}
                    htmlType='submit'
                  />
                </EFormItem>
              </Form>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export const WrappedRequestFormForm = Form.create()(RequestForm);
