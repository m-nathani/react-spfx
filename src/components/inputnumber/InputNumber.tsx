import * as React from 'react';
import { IEInputNumberProps } from './IInputNumberProps';
import { InputNumber } from 'antd';

export class EInputNumber extends React.Component<IEInputNumberProps, any> {
  constructor(...args: any) {
    super(...args);
  }

  public render(): JSX.Element {
    const { min, max, defaultValue, ...rest } = this.props;
    return (
      <InputNumber {...rest} min={min} max={max} defaultValue={defaultValue} />
    );
  }
}
