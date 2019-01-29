import * as React from 'react';
import { IETimePickerProps } from './ITimePickerProps';
import { TimePicker } from 'antd';

export class ETimePicker extends React.Component<IETimePickerProps, any> {
  constructor(...args: any) {
    super(...args);
  }

  public render(): JSX.Element {
    return <TimePicker {...this.props} onChange={this.props.onChange} />;
  }
}
