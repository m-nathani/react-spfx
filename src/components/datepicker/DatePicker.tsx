import * as React from 'react';
import { IEDatePickerProps } from './IDatePicker';
import { DatePicker } from 'antd';

export class EDatePicker extends React.Component<IEDatePickerProps, any> {
  constructor(props: IEDatePickerProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <DatePicker {...this.props} onChange={this.props.onChange} />;
  }
}
