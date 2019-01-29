import * as React from 'react';
import { IECheckboxProps } from './ICheckboxProps';
import { Checkbox } from 'antd';

export class ECheckbox extends React.Component<IECheckboxProps, any> {
  constructor(args: any) {
    super(...args);
  }

  public render(): JSX.Element {
    const { name, value, ...rest } = this.props;
    return (
      <Checkbox {...rest} onChange={this.props.onChange} name={this.props.name}>
        {this.props.label}
      </Checkbox>
    );
  }
}
