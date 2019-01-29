import * as React from 'react';
import { IEDatePickerProps } from './IDatePickerProps';
import { DatePicker } from 'antd';

export class EDatePicker extends React.Component<IEDatePickerProps, any> {
  constructor(...args: any) {
    super(...args);
  }

  public render(): JSX.Element {
    return <DatePicker {...this.props} onChange={this.props.onChange} />;
  }
}
