import * as React from 'react';
import { IERangePickerProps } from './IRangePicker';
import { DatePicker } from 'antd';
const { RangePicker } = DatePicker;

export class ERangePicker extends React.Component<IERangePickerProps, any> {
  constructor(props: IERangePickerProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <RangePicker {...this.props} />;
  }
}
