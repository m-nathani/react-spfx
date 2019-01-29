import * as React from 'react';
import { IERangePickerProps } from './IRangePickerProps';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export class ERangePicker extends React.Component<IERangePickerProps, any> {
  constructor(...args: any) {
    super(...args);
  }

  public render(): JSX.Element {
    return <RangePicker {...this.props} />;
  }
}
