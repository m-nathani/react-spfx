import * as React from 'react';
import { IETimePickerProps } from './ITimePicker';
import { TimePicker } from 'antd';

export class ETimePicker extends React.Component<IETimePickerProps, any> {
  constructor(props: IETimePickerProps) {
    super(props);
  }

  public render(): JSX.Element {
    return <TimePicker {...this.props} onChange={this.props.onChange} />;
  }
}
